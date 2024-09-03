import Slider from "./components/Slider";

export const Blog = async () => {
  const postsData = await fetch(`https://aiblog.fana.ai//wp-json/wp/v2/posts?per_page=10&status=publish`, {
    next: { revalidate: 60 },
  });
  const posts = await postsData.json();

  return (
    <section className="blog">
      <div className="blog__container">
        <div className="blog__title">Latest blog updates</div>
        <Slider posts={posts} />
      </div>
    </section>
  );
};
