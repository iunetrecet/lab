(function() {
  function filterPosts(category) {
    var posts = document.querySelectorAll('.post');
    Array.from(posts).forEach(function(post) {
      if (post.classList.contains(category)) {
        post.classList.remove("hide");
      } else {
        post.classList.add("hide");
      }
    });
  }

  var selectors = document.querySelectorAll(".selector");
  Array.from(selectors).forEach(function(selector) {
    selector.onclick = function(event) {
      event.preventDefault();
      var category = selector.getAttribute("data-selector");
      filterPosts(category);
    }
  })
})();
