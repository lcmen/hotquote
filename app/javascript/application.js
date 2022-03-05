import "unpoly/unpoly"
import "./controllers"

up.form.config.submitSelectors.push(['form'])
up.link.config.followSelectors.push('a[href]')
up.radio.config.pollInterval = 10000

up.on('flash:notice', function({ content }) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');
  const html = doc.body.firstChild;

  document.getElementById('flash').prepend(html);
})

up.compiler('[up-keep][updated]', function(element) {
  element.addEventListener('up:fragment:keep', function(event) {
    const next = new Date(event.newFragment.getAttribute('updated'))
    const prev = new Date(element.getAttribute('updated'))

    if (prev < next) event.preventDefault()
  })
})
