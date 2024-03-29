/* eslint-disable max-len */
import BrandsSliderArrowSvg from '@/components/elements/BrandsSliderArrow/BrandsSliderArrowSvg'
import styles from '@/styles/dashboard/index.module.scss'
import { IBrandsSliderArrow } from '@/types/elements'
const BrandsSliderPrevArrow = (props: IBrandsSliderArrow) => (
  <button
    className={`${styles.dashboard__brands__slider__arrow} ${styles.dashboard__brands__slider__arrow_prev} ${props.modeClass}`}
    onClick={props.onClick}
  >
    <span>
      <BrandsSliderArrowSvg />
    </span>
  </button>
)

export default BrandsSliderPrevArrow
