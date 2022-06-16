import Link from "next/link"

export default function Subnav(props) {
  return <>
    <Link href='/Home'>
      <a className={classes}>{children}</a>
    </Link>
  </>
}  