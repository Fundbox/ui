import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import FbxPrintLink from './FbxPrintLink.vue'
import summary from './FbxPrintLink.md'

const stories = storiesOf('Components/PrintLink', module)

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxPrintLink },
  data() {
    return {
      printTitle: 'Ein Cupcakelied',
      printHtmlContent: `
        Cupcake ipsum dolor sit amet cake jelly-o.
        Topping biscuit donut biscuit jelly beans candy danish.
        Cheesecake macaroon pastry sweet roll bear claw powder dragée macaroon.
        Icing macaroon jelly beans sweet roll.
        Cake chocolate cupcake cotton candy jujubes tootsie roll croissant toffee.
        Marzipan sesame snaps lollipop dessert cupcake fruitcake tiramisu icing marshmallow.
        Fruitcake muffin danish fruitcake. Cotton candy toffee pastry sweet sweet sweet chocolate cake halvah.
        Pie soufflé candy canes tootsie roll candy chocolate bar cookie. Chocolate bar icing cupcake pastry tart pudding.
      `,
    }
  },
  template: `
    <div>
      <div style="margin-bottom: 25px;">
        <fbx-print-link
          :print-title="printTitle"
          :print-html-content="printHtmlContent"
        />
      </div>

      <p style="margin-bottom: 10px;">Without print icon:</p>

      <fbx-print-link
        :print-title="printTitle"
        :print-html-content="printHtmlContent"
        :with-icon="false"
      />
    </div>
  `,
})))
