// import { Blurhash } from 'react-blurhash'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import styles from './styles.module.css'

export default function ImageGrid (props) {
  const { searchResults } = props

  return <>
    <section className={ styles.gridContainer }>

      {
        searchResults?.results?.length
          ? <ResponsiveMasonry columnsCountBreakPoints= {{ 300: 1, 600: 2, 900: 3, 1200: 4 }} >
            <Masonry gutter="16px">
              {
                searchResults?.results.map(p => <a
                    className={ styles.imageContainer }
                    key={ `result-image-${p.id}-${Math.random()}` }
                    style={{
                      backgroundColor: p.color,
                      backgroundImage: `url(${p.urls.small})`
                    }}
                    href={ `https://unsplash.com/photos/${p.id}` }
                  >
                    {/* <Blurhash
                      hash={ p.blur_hash }
                      width="100%"
                      height="100%"
                    /> */}
                    <img
                      className={ styles.highres }
                      src={ p.urls.small }
                      alt={ p.alt_description }
                    />
                    <div className={ styles.colorOverlay } />
                    <div
                      className={ styles.overlay }
                      style={{
                        background: `linear-gradient(to top, ${p.color}, rgba(0,0,0, 0) 50%)`
                      }}
                    >
                      <p>
                        <img
                          className={ styles.profileImage }
                          src={ p.user.profile_image.medium }
                        />
                        <b>{ p.user.name }</b>
                      </p>
                      { p.alt_description && <p className={ styles.caption }>{ p.alt_description }</p> }
                    </div>
                  </a>
                )
              }
            </Masonry>
          </ResponsiveMasonry>
          : <p className={ styles.noResults }>Oh no, we couldn't find anything!</p>
      }


    </section>
  </>
}