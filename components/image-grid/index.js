// import { Blurhash } from 'react-blurhash'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import styles from './styles.module.css'

export default function ImageGrid (props) {
  const { searchResults } = props

  return <>
    <section className={ styles.gridContainer }>
      <ResponsiveMasonry
        columnsCountBreakPoints= {{ 300: 1, 600: 2, 900: 3, 1200: 4 }}
      >
        <Masonry gutter="8px">
          {
            searchResults?.results
              ? searchResults?.results.map(p => <div className={ styles.imageContainer } key={ `result-image-${p.id}` }>
                {/* <Blurhash
                  hash={ p.blur_hash }
                  width="100%"
                  height="100%"
                /> */}
                <img className={ styles.highres } src={ p.urls.small } />
                <div className={ styles.overlay }>
                  <p>{ p.user.name }</p>
                </div>
              </div>)
              : <pre className="dump">{ JSON.stringify(searchResults, null, 2)}</pre>
          }
        </Masonry>
      </ResponsiveMasonry>

    </section>

    {/* </section> */}
  </>
}