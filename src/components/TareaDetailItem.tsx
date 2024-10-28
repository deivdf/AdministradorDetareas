
type TareaDeitailsitemprops = {
    label: String,
    data: String
}

function TareaDetailItem({label, data}: TareaDeitailsitemprops) {
  return (
    <div>
        <p className="p-5 font-bold uppercase">{label}: {''}
            <span className="font-normal normal-case">{data}</span>
        </p>
    </div>
  )
}

export default TareaDetailItem