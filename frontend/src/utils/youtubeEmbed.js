export function youtubeEmbed(url) {
  if (!url) return "";
  const match = url.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}
