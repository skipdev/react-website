import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'
import '../components/sidebar.css'

class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <Sidebar pageTitle={'Contact'}/>
        <div className="main">
          <div id="top">
            <p></p>
          </div>
          <div id="about">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et venenatis ligula, in dictum nisi. Nam tellus dui, luctus in imperdiet eget, eleifend sit amet metus. Nam sed lorem in ex tempus egestas cursus non turpis. Nam mollis dui in turpis vehicula blandit. Curabitur vitae sem massa. Donec hendrerit, nunc sed imperdiet auctor, odio velit condimentum arcu, eget facilisis massa quam et lacus. Nullam vitae consequat tortor.

              Morbi interdum luctus arcu eget faucibus. Morbi diam quam, ornare vitae aliquet in, ultrices eget urna. Phasellus malesuada porttitor mi, ut vulputate nisi finibus id. Sed non purus ultricies felis facilisis dictum ac sed lorem. Vivamus justo erat, gravida non placerat sit amet, elementum vel lorem. Suspendisse sed aliquet lorem. Mauris non placerat erat, eget consequat odio. Fusce imperdiet ac leo ac sollicitudin. Nulla laoreet augue non nisi finibus, vel vestibulum enim volutpat. Pellentesque id orci interdum, scelerisque lectus in, ullamcorper justo. In eleifend imperdiet efficitur. Quisque at metus vestibulum, ultrices ante et, volutpat mauris. Cras urna tellus, iaculis vel cursus eu, mollis ac ipsum. Donec libero libero, sollicitudin et leo eget, imperdiet pharetra ipsum.

              Vivamus est lectus, condimentum a sodales gravida, porttitor ac tortor. Nam lacinia vel leo sit amet laoreet. Morbi posuere dolor porta arcu sodales rutrum. Proin et finibus massa, ut tempus orci. Maecenas iaculis condimentum elementum. Mauris efficitur dictum finibus. Proin hendrerit mauris odio, id convallis nisl venenatis non. Vivamus vulputate urna id ex viverra volutpat et ac tortor. Cras et mi dui. Phasellus eros velit, aliquam sit amet magna porttitor, molestie ultricies augue. Sed non venenatis nisl. Suspendisse euismod ex id mauris laoreet, in interdum ex sodales.

              Fusce ultrices ex a sapien pharetra consectetur. Sed commodo, odio ac vestibulum porta, eros est accumsan ligula, et eleifend mauris mi eget velit. Duis tellus urna, faucibus eget porttitor vel, sollicitudin ut leo. Sed egestas sapien eget urna vulputate, at aliquet enim facilisis. Curabitur semper malesuada sapien, quis malesuada velit tempor sit amet. Mauris at nisi nec ex venenatis pulvinar. Vivamus a ex bibendum, lacinia eros at, ornare quam. Etiam malesuada ligula mi, eget efficitur tortor cursus sit amet. Mauris at auctor sem, condimentum pharetra odio. Suspendisse sit amet turpis diam.

              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In quis dui sed urna efficitur tincidunt non et velit. Nullam sed molestie metus. Quisque efficitur porttitor orci, ut convallis justo egestas eu. Proin tempus est id sagittis pulvinar. Phasellus ut libero libero. Vestibulum auctor gravida elit id interdum. Nam auctor vulputate lectus. Duis et ligula diam. Cras accumsan nibh ac lorem lacinia hendrerit non et lorem. Nulla convallis feugiat eros, et sodales velit laoreet non.)</p>
          </div>
        </div>
        </div>
      </Layout>
    )
  }
}
export default ContactPage;

