interface Props {
  image: string
  size: number
}

export default function(props: Props) {
  return (
    <div class="relative group">
      <img src={props.image} width={props.size * 100} />
    </div>
  )
}
