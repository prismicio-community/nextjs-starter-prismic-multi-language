import MyComponent from '../../../../slices/Image';

export default {
  title: 'slices/Image'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"withAccent":true},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _LightSlate = () => <MyComponent slice={{"variation":"lightSlate","name":"Light Slate","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"withAccent":false},"id":"_LightSlate"}} />
_LightSlate.storyName = 'Light Slate'
