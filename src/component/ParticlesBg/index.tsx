import ParticlesBg,{TypeProp} from 'particles-bg'

const types = [
  "color",
  "ball",
  "lines",
  "thick",
  "circle",
  "cobweb",
  "polygon",
  "square",
  "tadpole",
  "fountain",
  "random",
  "custom"
]

function ParticlesBgView() {
  const random = parseInt(Math.random() * types.length + '')
  const typename : TypeProp = types[random] as TypeProp  
  return (
    <ParticlesBg type={typename} bg={true} />
  );
}

export default ParticlesBgView;
