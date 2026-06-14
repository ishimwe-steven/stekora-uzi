import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faFileImport, faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "../../layouts/AdminLayout";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../../services/productApi";
import { resolveImageUrl } from "../../utils/resolveImageUrl";

const emptyForm = {
  title: "",
  description: "",
  price: "",
  discount: "0",
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

  useEffect(() => {
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return products;

    return products.filter((product) =>
      [product.title, product.description, product.price, product.discount]
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
    setForm({ ...form, [event.target.name]: event.target.value });
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
      price: product.price || "",
      discount: product.discount || "0",
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
      payload.append("price", price);
      payload.append("discount", form.discount || 0);
      payload.append("image_url", form.image_url.trim());

      if (form.image) {
        payload.append("image", form.image);
      }

      if (editingId) {
        await updateProduct(editingId, payload);
        alert("Product updated");
      } else {
        await createProduct(payload);
        alert("Product created");
      }

      resetForm();
      setFormOpen(false);
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
        .admin-products-page {
          display: grid;
          gap: 1.65rem;
          padding: 0.25rem 0;
        }

        .admin-products-actions-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .admin-products-big-btn {
          border: 0;
          border-radius: 8px;
          min-height: 60px;
          padding: 0 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          color: #ffffff;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(2, 132, 199, 0.16);
        }

        .admin-products-big-btn.green {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 12px 24px rgba(22, 163, 74, 0.16);
        }

        .admin-products-big-btn svg {
          font-size: 1.05rem;
        }

        .admin-products-panel {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 18px 42px rgba(15, 23, 42, 0.13);
          border: 1px solid #e2e8f0;
        }

        .admin-products-toolbar {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.45rem;
          background: #ffffff;
          flex-wrap: wrap;
        }

        .admin-products-count {
          color: #10243f;
          font-weight: 800;
        }

        .admin-products-search-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.35rem;
          color: #10243f;
          font-size: 1rem;
          font-weight: 800;
        }

        .admin-products-search {
          width: min(250px, 52vw);
          height: 52px;
          border: 1px solid #aeb7c2;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          outline: none;
          font-size: 0.95rem;
          background: #ffffff;
        }

        .admin-products-form {
          display: grid;
          gap: 0.9rem;
        }

        .admin-products-grid {
          display: grid;
          gap: 0.9rem;
        }

        .admin-products-form label {
          display: grid;
          gap: 0.35rem;
          color: #334155;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .admin-products-form input,
        .admin-products-form textarea {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem 0.85rem;
          font: inherit;
          outline: none;
        }

        .admin-products-file-input {
          background: #f8fafc;
          cursor: pointer;
        }

        .admin-products-preview {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          border: 1px solid #dbe3ec;
          border-radius: 8px;
          background: #f1f5f9;
        }

        .admin-products-help {
          color: #64748b;
          font-size: 0.78rem;
          line-height: 1.5;
        }

        .admin-products-form textarea {
          min-height: 92px;
          resize: vertical;
        }

        .admin-products-actions {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .admin-products-primary,
        .admin-products-secondary,
        .admin-products-danger {
          border: 0;
          border-radius: 8px;
          padding: 0.7rem 1rem;
          font-weight: 800;
          cursor: pointer;
        }

        .admin-products-primary {
          background: #003366;
          color: #ffffff;
        }

        .admin-products-secondary {
          background: #e8eef6;
          color: #003366;
        }

        .admin-products-danger {
          background: #fee2e2;
          color: #991b1b;
        }

        .admin-products-table-wrap {
          overflow-x: auto;
        }

        .admin-products-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
        }

        .admin-products-table th,
        .admin-products-table td {
          text-align: left;
          border-bottom: 1px solid #d7dde5;
          border-right: 1px solid #d7dde5;
          padding: 0.95rem 0.85rem;
          vertical-align: top;
          font-size: 0.98rem;
          color: #0f172a;
        }

        .admin-products-table th {
          position: relative;
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
          font-weight: 900;
          font-size: 1rem;
          vertical-align: middle;
        }

        .admin-products-table th::after {
          content: "";
          position: absolute;
          right: 0.65rem;
          top: 50%;
          width: 0;
          height: 0;
          border-left: 0.32rem solid transparent;
          border-right: 0.32rem solid transparent;
          border-bottom: 0.55rem solid rgba(255, 255, 255, 0.22);
          transform: translateY(-70%);
        }

        .admin-products-table th:last-child,
        .admin-products-table td:last-child {
          border-right: none;
        }

        .admin-products-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-products-table tbody tr:nth-child(even) {
          background: #ffffff;
        }

        .admin-products-image {
          width: 64px;
          height: 44px;
          border-radius: 6px;
          object-fit: cover;
          border: 1px solid #dbe3ec;
          background: #f1f5f9;
        }

        .admin-products-row-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.45rem;
        }

        .admin-product-action {
          border: 0;
          border-radius: 6px;
          min-width: 86px;
          min-height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .admin-product-action.edit {
          background: #ffc107;
          color: #0f172a;
        }

        .admin-product-action.delete {
          background: #ff3f4f;
          color: #ffffff;
        }

        .admin-products-empty {
          color: #64748b;
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #f8fafc;
        }

        .admin-products-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.55);
        }

        .admin-products-modal {
          width: min(620px, 100%);
          max-height: calc(100vh - 2rem);
          overflow-y: auto;
          background: #ffffff;
          border-radius: 10px;
          border: 1px solid #dfe7ef;
          box-shadow: 0 24px 64px rgba(15, 23, 42, 0.22);
          padding: 1.35rem;
        }

        .admin-products-modal-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .admin-products-modal-head h2 {
          margin: 0;
          color: #10243f;
          font-size: 1.1rem;
        }

        .admin-products-close {
          border: 0;
          background: #e8eef6;
          color: #003366;
          border-radius: 999px;
          width: 34px;
          height: 34px;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: 900;
        }

        @media (min-width: 760px) {
          .admin-products-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .admin-products-search-wrap {
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
          }

          .admin-products-search {
            width: 100%;
          }
        }
      `}</style>

      <div className="admin-products-page">
        <div className="admin-products-actions-bar">
          <button className="admin-products-big-btn green" type="button" onClick={openAddForm}>
            <FontAwesomeIcon icon={faBoxOpen} />
            Add Product
          </button>
          <button className="admin-products-big-btn" type="button" onClick={openAddForm}>
            <FontAwesomeIcon icon={faPlus} />
            New Item
          </button>
          <button className="admin-products-big-btn" type="button" onClick={() => alert("Excel import will be added after upload support.")}>
            <FontAwesomeIcon icon={faFileImport} />
            Import Products (Excel)
          </button>
        </div>

        <section className="admin-products-panel">
          <div className="admin-products-toolbar">
            <div className="admin-products-count">
              <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> products
            </div>
            <label className="admin-products-search-wrap">
              Search products:
              <input
                className="admin-products-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
          </div>

          {loading && <div className="admin-products-empty">Loading products...</div>}
          {error && <div className="admin-products-empty">{error}</div>}
          {!loading && !error && products.length === 0 && (
            <div className="admin-products-empty">No products in the database yet.</div>
          )}

          {!loading && !error && products.length > 0 && (
            <div className="admin-products-table-wrap">
              <table className="admin-products-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>
                        {product.image_url ? (
                          <img className="admin-products-image" src={resolveImageUrl(product.image_url)} alt="" />
                        ) : (
                          "No image"
                        )}
                      </td>
                      <td>{product.title}</td>
                      <td>R{product.price}</td>
                      <td>{product.discount || 0}</td>
                      <td>{product.description || "No description"}</td>
                      <td>
                        <div className="admin-products-row-actions">
                          <button className="admin-product-action edit" type="button" onClick={() => startEdit(product)}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                            Edit
                          </button>
                          <button className="admin-product-action delete" type="button" onClick={() => handleDelete(product.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {formOpen && (
          <div className="admin-products-modal-backdrop" role="presentation" onClick={closeForm}>
            <section className="admin-products-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
              <div className="admin-products-modal-head">
                <h2>{editingId ? "Edit product" : "Add product"}</h2>
                <button className="admin-products-close" type="button" onClick={closeForm} aria-label="Close product form">
                  ×
                </button>
              </div>

              <form className="admin-products-form" onSubmit={handleSubmit}>
                <div className="admin-products-grid">
                  <label>
                    Product title
                    <input name="title" value={form.title} onChange={handleChange} required />
                  </label>
                  <label>
                    Price
                    <input name="price" type="number" min="0" step="0.01" value={form.price} onChange={handleChange} required />
                  </label>
                  <label>
                    Discount
                    <input name="discount" type="number" min="0" step="0.01" value={form.discount} onChange={handleChange} />
                  </label>
                  <label>
                    Product image
                    <input
                      className="admin-products-file-input"
                      type="file"
                      accept="image/*"
                      onChange={(event) => setForm({ ...form, image: event.target.files?.[0] || null })}
                    />
                    <span className="admin-products-help">Choose an image from your computer.</span>
                  </label>
                </div>
                {(form.image || form.image_url) && (
                  <img
                    className="admin-products-preview"
                    src={form.image ? URL.createObjectURL(form.image) : resolveImageUrl(form.image_url)}
                    alt="Product preview"
                  />
                )}
                <label>
                  Description
                  <textarea name="description" value={form.description} onChange={handleChange} />
                </label>

                <div className="admin-products-actions">
                  <button className="admin-products-primary" type="submit" disabled={saving}>
                    {saving ? "Saving..." : editingId ? "Update Product" : "Save Product"}
                  </button>
                  <button className="admin-products-secondary" type="button" onClick={closeForm}>
                    Cancel
                  </button>
                </div>
              </form>
            </section>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
