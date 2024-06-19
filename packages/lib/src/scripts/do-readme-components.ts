import fs from 'fs'

const componentsToExclude = ['Floating', 'FlowbiteProvider', 'FlowbiteThemable']

const componentsNaming: Record<string, { folder: string; img: string; doc: string }> = {
  Accordion: { folder: 'components', img: 'accordion', doc: 'accordion' },
  Alert: { folder: 'components', img: 'alerts', doc: 'alert' },
  Avatar: { folder: 'components', img: 'avatar', doc: 'avatar' },
  Badge: { folder: 'components', img: 'badge', doc: 'badge' },
  Banner: { folder: 'components', img: 'banner', doc: 'banner' },
  Blockquote: { folder: 'typography', img: 'blockquote', doc: 'blockquote' },
  Breadcrumb: { folder: 'components', img: 'breadcrumbs', doc: 'breadcrumb' },
  Button: { folder: 'components', img: 'buttons', doc: 'button' },
  ButtonGroup: { folder: 'components', img: 'button-group', doc: 'button-group' },
  Card: { folder: 'components', img: 'cards', doc: 'card' },
  Carousel: { folder: 'components', img: 'carousel', doc: 'carousel' },
  Checkbox: { folder: 'forms', img: 'checkbox', doc: 'checkbox' },
  Drawer: { folder: 'components', img: 'drawer', doc: 'drawer' },
  Dropdown: { folder: 'components', img: 'dropdown', doc: 'dropdown' },
  Floating: { folder: 'components', img: 'floating', doc: 'floating' },
  Footer: { folder: 'components', img: 'footer', doc: 'footer' },
  Heading: { folder: 'typography', img: 'heading', doc: 'heading' },
  Input: { folder: 'forms', img: 'input-field', doc: 'input' },
  Jumbotron: { folder: 'components', img: 'jumbotron', doc: 'jumbotron' },
  Kbd: { folder: 'components', img: 'kbd', doc: 'kbd' },
  Link: { folder: 'typography', img: 'link', doc: 'link' },
  ListGroup: { folder: 'components', img: 'list-group', doc: 'list-group' },
  Modal: { folder: 'components', img: 'modal', doc: 'modal' },
  Navbar: { folder: 'components', img: 'navbar', doc: 'navbar' },
  Pagination: { folder: 'components', img: 'pagination', doc: 'pagination' },
  Radio: { folder: 'forms', img: 'radio', doc: 'radio' },
  Rating: { folder: 'components', img: 'rating', doc: 'rating' },
  Select: { folder: 'forms', img: 'select', doc: 'select' },
  Sidebar: { folder: 'components', img: 'sidebar', doc: 'sidebar' },
  Spinner: { folder: 'components', img: 'spinner', doc: 'spinner' },
  Table: { folder: 'components', img: 'tables', doc: 'table' },
  Tabs: { folder: 'components', img: 'tabs', doc: 'tabs' },
  Textarea: { folder: 'forms', img: 'textarea', doc: 'textarea' },
  ToastList: { folder: 'components', img: 'toast', doc: 'toast' },
  Toggle: { folder: 'forms', img: 'toggle', doc: 'toggle' },
  Tooltip: { folder: 'components', img: 'tooltips', doc: 'tooltip' },
}

const regex = /<!-- @qwikerx start -->([\s\S]*?)<!-- @qwikerx end -->/

export function generate() {
  console.log('Generating components documentation...')

  const readmeFile = fs.readFileSync('./README.md').toString()

  const components = fs
    .readdirSync('./src/components')
    .filter((component) => !componentsToExclude.includes(component) && fs.lstatSync(`./src/components/${component}`).isDirectory())

  const componentsAsLinks = components.map((comp) => {
    return `<a href="https://flowbite-qwik.com/docs/${componentsNaming[comp].folder}/${componentsNaming[comp].doc}">
<img alt="Qwik ${comp}" src="https://flowbite.s3.amazonaws.com/github/${componentsNaming[comp].img}.jpg">
</a>`
  })
  const componentsGrid = `<div class="flex gap-3">\n${componentsAsLinks.join('\n')}\n</div>`

  const newReadmeFile = readmeFile.replace(regex, `<!-- @qwikerx start -->\n${componentsGrid}\n<!-- @qwikerx end -->`)
  fs.writeFileSync('./README.md', newReadmeFile)
}

generate()