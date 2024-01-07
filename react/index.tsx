export function XtifyIcon({name,...props}:{name:string}) {
    return  <svg {...props}  aria-hidden="true">
    <use xlinkHref={'#icon-' + name}></use>
</svg>
}   