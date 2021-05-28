import styles from './styles.module.css'

export default function UpdateBanner () {

  return <>
    <a className={ styles.banner } href="">
      <p>This is the original challenge version. Click here for an updated version.</p>
    </a>
  </>
}
