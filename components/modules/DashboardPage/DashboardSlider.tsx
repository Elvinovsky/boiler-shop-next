import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useEffect } from 'react'
import { IDashboardSlider } from '@/types/dashboard'
import styles from '@/styles/dashboard/index.module.scss'
import skeletonStyles from '@/styles/skeleton/index.module.scss'
import Link from 'next/link'
import { formatPrice } from '@/utils/common'

const DashboardSlider = ({
  items,
  spinner,
  goToPartPage,
}: IDashboardSlider) => {
  const isMedia768 = useMediaQuery(768)
  const isMedia1366 = useMediaQuery(1366)
  const isMedia800 = useMediaQuery(800)
  const isMedia560 = useMediaQuery(560)

  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  useEffect(() => {
    const slider = document.querySelectorAll(`.${styles.dashboard__slider}`)

    slider.forEach((element) => {
      const list = element?.querySelector(`.slick-list`) as HTMLElement

      list.style.height = isMedia560 ? '276px' : '390px'
      list.style.padding = ' 0 5px'
      list.style.marginRight = isMedia560 ? '-8px' : isMedia800 ? '-15px' : '0'
    })
  }, [isMedia560, isMedia800])

  const settings = {
    dots: false,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    slidesToScroll: isMedia768 ? 1 : 2,
  }

  const width = {
    width: isMedia1366 ? (isMedia800 ? (isMedia560 ? 160 : 252) : 317) : 344,
  }

  return (
    <Slider className={styles.dashboard__slider} {...settings}>
      {spinner ? (
        [...Array(8)].map((_, index) => (
          <div
            className={`${skeletonStyles.skeleton__item} ${
              mode === 'dark' ? `${skeletonStyles.dark_mode}` : ''
            }`}
            key={index}
            style={width}
          >
            <div className={skeletonStyles.skeleton__item__light} />
          </div>
        ))
      ) : items.length ? (
        items.map((part) => (
          <div
            className={`${styles.dashboard__slide} ${darkModeClass}`}
            key={part.id}
            style={width}
          >
            <img src={JSON.parse(part.images)[0]} alt={part.name} />
            <div className={styles.dashboard__slide__inner}>
              <Link
                href={goToPartPage ? `/catalog/${part.id}` : '/catalog'}
                legacyBehavior
              >
                <a href="">
                  <h3 className={styles.dashboard__slide__title}>
                    {part.name}
                  </h3>
                </a>
              </Link>
              <span className={styles.dashboard__slide__code}>
                Артику: {part.vendor_code}
              </span>
              <span className={styles.dashboard__slide__price}>
                {formatPrice(part.price)} P
              </span>
            </div>
          </div>
        ))
      ) : (
        <span>Список товаров пуст</span>
      )}
    </Slider>
  )
}

export default DashboardSlider
