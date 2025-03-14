document.addEventListener("DOMContentLoaded", function () {
  const blogPosts = [
    { title: "Kids BJJ Classes in Meath & Near Dublin – Build Confidence & Skills", url: "/blog/kids-bjj-classes.html" },
    { title: "How to Tie Your BJJ Belt: A Beginner's Guide", url: "/blog/how-to-tie-bjj-belt.html" },
    { title: "Muay Thai Drills for Beginners: Kickstart Your Training", url: "/blog/muay-thai-drills-for-beginners.html" },
    { title: "MMA Near Dublin: Train Like a Fighter", url: "/blog/mma-dublin.html" },
    { title: "What is BJJ? Learn the Basics", url: "/blog/what-is-brazilian-jiu-jitsu-bjj.html" },
    { title: "Brazilian Jiu-Jitsu (BJJ) Belts Explained", url: "/blog/bjj-belts-in-order.html" },
    { title: "Muay Thai Near Dublin: Start Training", url: "/blog/muay-thai-dublin.html" },
  ];

  const currentUrl = window.location.pathname;
  let currentIndex = blogPosts.findIndex((post) => post.url === currentUrl);

  let previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  let nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const previousLink = document.getElementById("previous-link");
  const nextLink = document.getElementById("next-link");

  if (previousLink) {
    previousLink.href = previousPost ? previousPost.url : "#";
  }
  if (nextLink) {
    nextLink.href = nextPost ? nextPost.url : "#";
  }
});
