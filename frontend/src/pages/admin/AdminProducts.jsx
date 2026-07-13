import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faFileImport, faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "../../layouts/AdminLayout";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../../services/productApi";
import { resolveImageUrl } from "../../utils/resolveImageUrl";

const emptyForm = {
  title: "",
  description: "",
  full_description: "",
  category: "Product",
  price: "",
  discount: "0",
  stock_quantity: "0",
  specifications: "",
  image_url: "",
  image: null
};

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => { loadProducts(); }, []);

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return products;
    return products.filter((product) =>
      [product.title, product.description, product.full_description, product.category,
       product.price, product.discount, product.stock_quantity, product.specifications]
        .some((value) => String(value || "").toLowerCase().includes(term))
    );
  }, [products, search]);

  async function loadProducts() {
    try {
      setLoading(true);
      setError("");
      const data = await getProducts();
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load products");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  function openAddForm() {
    resetForm();
    setFormOpen(true);
  }

  function closeForm() {
    resetForm();
    setFormOpen(false);
  }

  function startEdit(product) {
    setEditingId(product.id);
    setForm({
      title: product.title || "",
      description: product.description || "",
      full_description: product.full_description || "",
      category: product.category || "Product",
      price: product.price ?? "",
      discount: product.discount ?? "0",
      stock_quantity: product.stock_quantity ?? "0",
      specifications: product.specifications || "",
      image_url: product.image_url || "",
      image: null
    });
    setFormOpen(true);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (saving) return;

    const title = form.title.trim();
    const price = String(form.price ?? "").trim();
    if (!title || !price) {
      alert("Product title and price are required");
      return;
    }

    setSaving(true);
    try {
      const payload = new FormData();
      payload.append("title", title);
      payload.append("description", form.description.trim());
      payload.append("full_description", form.full_description.trim());
      payload.append("category", form.category.trim() || "Product");
      payload.append("price", price);
      payload.append("discount", form.discount || 0);
      payload.append("stock_quantity", form.stock_quantity || 0);
      payload.append("specifications", form.specifications.trim());
      payload.append("image_url", form.image_url.trim());
      if (form.image) payload.append("image", form.image);

      if (editingId) {
        await updateProduct(editingId, payload);
        alert("Product updated");
      } else {
        await createProduct(payload);
        alert("Product created");
      }

      closeForm();
      await loadProducts();
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to save product");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this product?")) return;
    try {
      await deleteProduct(id);
      if (editingId === id) resetForm();
      await loadProducts();
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to delete product");
    }
  }

  return (
    <AdminLayout title="Products">
      <style>{`
        .admin-products-page{display:grid;gap:1.65rem;padding:.25rem 0}.admin-products-actions-bar{display:flex;align-items:center;gap:1rem;flex-wrap:wrap}.admin-products-big-btn{border:0;border-radius:8px;min-height:60px;padding:0 1.5rem;display:inline-flex;align-items:center;gap:1rem;color:#fff;background:linear-gradient(135deg,#0ea5e9,#0284c7);font-size:1.05rem;font-weight:800;cursor:pointer}.admin-products-big-btn.green{background:linear-gradient(135deg,#22c55e,#16a34a)}.admin-products-panel{background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 18px 42px rgba(15,23,42,.13);border:1px solid #e2e8f0}.admin-products-toolbar{min-height:92px;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.25rem 1.45rem;flex-wrap:wrap}.admin-products-search{width:min(250px,52vw);height:52px;border:1px solid #aeb7c2;border-radius:8px;padding:.65rem .8rem}.admin-products-table-wrap{overflow-x:auto}.admin-products-table{width:100%;border-collapse:collapse}.admin-products-table th,.admin-products-table td{text-align:left;border-bottom:1px solid #d7dde5;padding:.85rem;vertical-align:top}.admin-products-table th{background:#20262c;color:#fff}.admin-products-table tbody tr:nth-child(odd){background:#f1f1f1}.admin-products-image{width:64px;height:44px;border-radius:6px;object-fit:cover}.admin-products-row-actions{display:flex;flex-direction:column;gap:.45rem}.admin-product-action{border:0;border-radius:6px;min-width:86px;min-height:38px;font-weight:700;cursor:pointer}.admin-product-action.edit{background:#ffc107}.admin-product-action.delete{background:#ff3f4f;color:#fff}.admin-products-empty{color:#64748b;margin:1rem;padding:1rem;border:1px dashed #94a3b8;border-radius:8px}.admin-products-modal-backdrop{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;padding:1rem;background:rgba(15,23,42,.55)}.admin-products-modal{width:min(760px,100%);max-height:calc(100vh - 2rem);overflow-y:auto;background:#fff;border-radius:10px;padding:1.35rem}.admin-products-modal-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem}.admin-products-close{border:0;background:#e8eef6;color:#003366;border-radius:999px;width:34px;height:34px;cursor:pointer;font-size:1.2rem}.admin-products-form{display:grid;gap:.9rem}.admin-products-grid{display:grid;gap:.9rem}.admin-products-form label{display:grid;gap:.35rem;color:#334155;font-size:.82rem;font-weight:800}.admin-products-form input,.admin-products-form textarea{width:100%;border:1px solid #cbd5e1;border-radius:8px;padding:.75rem .85rem;font:inherit}.admin-products-form textarea{min-height:92px;resize:vertical}.admin-products-preview{width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:8px}.admin-products-actions{display:flex;gap:.65rem}.admin-products-primary,.admin-products-secondary{border:0;border-radius:8px;padding:.7rem 1rem;font-weight:800;cursor:pointer}.admin-products-primary{background:#003366;color:#fff}.admin-products-secondary{background:#e8eef6;color:#003366}@media(min-width:760px){.admin-products-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
      `}</style>

      <div className="admin-products-page">
        <div className="admin-products-actions-bar">
          <button className="admin-products-big-btn green" type="button" onClick={openAddForm}><FontAwesomeIcon icon={faBoxOpen}/> Add Product</button>
          <button className="admin-products-big-btn" type="button" onClick={openAddForm}><FontAwesomeIcon icon={faPlus}/> New Item</button>
          <button className="admin-products-big-btn" type="button" onClick={()=>alert("Excel import will be added after upload support.")}><FontAwesomeIcon icon={faFileImport}/> Import Products (Excel)</button>
        </div>

        <section className="admin-products-panel">
          <div className="admin-products-toolbar">
            <div><strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> products</div>
            <label>Search products: <input className="admin-products-search" type="search" value={search} onChange={(e)=>setSearch(e.target.value)}/></label>
          </div>

          {loading&&<div className="admin-products-empty">Loading products...</div>}
          {error&&<div className="admin-products-empty">{error}</div>}
          {!loading&&!error&&products.length===0&&<div className="admin-products-empty">No products in the database yet.</div>}

          {!loading&&!error&&products.length>0&&<div className="admin-products-table-wrap"><table className="admin-products-table"><thead><tr><th>ID</th><th>Image</th><th>Title</th><th>Category</th><th>Price</th><th>Stock</th><th>Description</th><th>Actions</th></tr></thead><tbody>{filteredProducts.map((product)=><tr key={product.id}><td>{product.id}</td><td>{product.image_url?<img className="admin-products-image" src={resolveImageUrl(product.image_url)} alt=""/>:"No image"}</td><td>{product.title}</td><td>{product.category||"Product"}</td><td>R{product.price}</td><td>{product.stock_quantity??0}</td><td>{product.description||"No description"}</td><td><div className="admin-products-row-actions"><button className="admin-product-action edit" onClick={()=>startEdit(product)}><FontAwesomeIcon icon={faPenToSquare}/> Edit</button><button className="admin-product-action delete" onClick={()=>handleDelete(product.id)}><FontAwesomeIcon icon={faTrash}/> Delete</button></div></td></tr>)}</tbody></table></div>}
        </section>

        {formOpen&&<div className="admin-products-modal-backdrop" onClick={closeForm}><section className="admin-products-modal" onClick={(e)=>e.stopPropagation()}><div className="admin-products-modal-head"><h2>{editingId?"Edit product":"Add product"}</h2><button className="admin-products-close" type="button" onClick={closeForm}>×</button></div><form className="admin-products-form" onSubmit={handleSubmit}><div className="admin-products-grid">
          <label>Product title<input name="title" value={form.title} onChange={handleChange} required/></label>
          <label>Category<input name="category" value={form.category} onChange={handleChange}/></label>
          <label>Price<input name="price" type="number" min="0" step="0.01" value={form.price} onChange={handleChange} required/></label>
          <label>Discount<input name="discount" type="number" min="0" step="0.01" value={form.discount} onChange={handleChange}/></label>
          <label>Stock quantity<input name="stock_quantity" type="number" min="0" step="1" value={form.stock_quantity} onChange={handleChange}/></label>
          <label>Product image<input type="file" accept="image/*" onChange={(e)=>setForm({...form,image:e.target.files?.[0]||null})}/></label>
        </div>
        {(form.image||form.image_url)&&<img className="admin-products-preview" src={form.image?URL.createObjectURL(form.image):resolveImageUrl(form.image_url)} alt="Product preview"/>}
        <label>Short description<textarea name="description" value={form.description} onChange={handleChange}/></label>
        <label>Full product details<textarea name="full_description" value={form.full_description} onChange={handleChange}/></label>
        <label>Specifications<textarea name="specifications" value={form.specifications} onChange={handleChange} placeholder={'Example:\nBrand: ...\nModel: ...\nWarranty: ...'}/></label>
        <div className="admin-products-actions"><button className="admin-products-primary" type="submit" disabled={saving}>{saving?"Saving...":editingId?"Update Product":"Save Product"}</button><button className="admin-products-secondary" type="button" onClick={closeForm}>Cancel</button></div>
        </form></section></div>}
      </div>
    </AdminLayout>
  );
}
