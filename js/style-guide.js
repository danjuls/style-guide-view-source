$(document).ready(function () {
  
  // For each style section add container and link 
  $('.style-section-code').each(function(i) {
    $(this).after('<pre class="line-numbers"></pre><a href="#" class="show-code">Show Code</a>');
  });
  
  // Iterate over all style sections and add its content to <pre> container
  $('.style-section-code').each(function () {
      $(this).next($('pre')).text($(this).html()).hide();
  });

  // Just wrapp the content inside the pre with <code> tag for prism
  $('pre').wrapInner('<code class="language-markup"></code>');

  $('a.show-code').on('click', function(event) {
    event.preventDefault();
    $(this).prev().slideToggle();
  });
  
});
