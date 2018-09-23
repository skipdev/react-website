import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'
import '../components/sidebar.css'

class ExperiencePage extends Component {
  render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <Sidebar pageTitle={'Experience'}/>
        <div className="main">
          <div id="top">
            <p></p>
          </div>
          <div id="about">
            <p className="title">Experiences</p>
            <br></br>
            <br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt enim eget neque dictum, non viverra eros aliquam. Nullam maximus posuere rhoncus. Duis ut nibh metus. Cras iaculis nec lacus in pretium. Etiam cursus efficitur turpis, id tincidunt mauris ultricies eu. Morbi malesuada tellus tellus, vitae commodo enim vehicula in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend neque quis mi semper, a elementum lorem ultricies.

              Fusce nibh quam, faucibus vitae convallis quis, pretium sed est. Quisque commodo nisi sit amet sagittis rutrum. Aenean volutpat lorem nibh, rutrum tristique erat rutrum nec. Proin ante metus, vulputate sit amet dignissim at, accumsan laoreet lacus. Suspendisse ac placerat felis. Donec volutpat porta mi. Mauris commodo felis sed tellus lacinia, vitae vehicula mi molestie. Fusce viverra magna libero, id condimentum enim mattis non. Suspendisse vitae hendrerit risus. Cras tincidunt gravida tincidunt. Morbi faucibus tellus eros, nec consequat libero scelerisque in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut a facilisis nisi.

              Suspendisse tincidunt fermentum felis. Nullam hendrerit viverra diam eu dapibus. Aliquam pharetra, justo finibus mattis vestibulum, purus augue blandit sapien, et accumsan tellus arcu vel dui. Praesent purus lorem, congue et commodo et, mattis at orci. Praesent enim diam, euismod eu imperdiet eu, tempor eu dolor. Pellentesque non fringilla ex. Aliquam a condimentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eget mollis sapien. Etiam tristique gravida fermentum. Maecenas tincidunt pharetra vulputate. Maecenas ultrices vitae risus eget aliquet.

              Aliquam convallis quis sapien vel mattis. Nullam et lorem sodales, interdum erat sit amet, pulvinar magna. Donec ultricies, risus sit amet euismod ultricies, dolor dolor suscipit tellus, vestibulum pretium ligula nibh at elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at pellentesque metus. Quisque convallis diam risus, quis vestibulum quam consectetur at. Nunc dapibus magna consectetur vulputate vehicula. Nullam eget risus non mi auctor pharetra. Ut dictum felis mi, a rutrum quam suscipit et. Duis in facilisis lacus. Quisque lacinia pretium ante, et porta lorem. Sed efficitur, metus at semper posuere, urna ipsum convallis nulla, sit amet cursus enim urna quis enim. Aenean bibendum augue id suscipit vulputate. Nam bibendum magna eget ex gravida, a ultricies nunc rhoncus. Sed nec tempus diam.

              Vestibulum lectus eros, sodales pretium rutrum nec, volutpat ut enim. Donec cursus felis quis tellus tempor tincidunt. Aenean sodales a erat in blandit. Phasellus quam lacus, sollicitudin vel placerat vel, vehicula vitae ipsum. Nulla sodales ornare ipsum, ac porttitor sem interdum eu. Ut sagittis mi eget justo sodales tempor. In euismod sodales augue nec mattis. Aliquam ex velit, tincidunt a lectus eget, pretium sodales purus. Donec tempus id mauris sagittis maximus. Morbi volutpat ultrices massa, in imperdiet nulla accumsan ut. Aliquam erat volutpat. Vestibulum sit amet nibh ut leo rutrum dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer feugiat tincidunt elit, eu pharetra dui vehicula id. Curabitur aliquam justo a nisl malesuada laoreet ac a velit. Curabitur at nibh neque.</p>
          </div>
        </div>
        </div>
      </Layout>
    )
  }
}
export default ExperiencePage;

