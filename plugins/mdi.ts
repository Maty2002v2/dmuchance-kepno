import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'
import ChevronUpIcon from 'vue-material-design-icons/ChevronUp.vue'
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue'
import ChevronLeftIcon from 'vue-material-design-icons/ChevronLeft.vue'
import PlusThickIcon from 'vue-material-design-icons/PlusThick.vue'
import MinusThickIcon from 'vue-material-design-icons/MinusThick.vue'
import ArrowUpIcon from 'vue-material-design-icons/ArrowUp.vue'
import ArrowRightIcon from 'vue-material-design-icons/ArrowRight.vue'
import CheckCircleIcon from 'vue-material-design-icons/CheckCircle.vue'
import SegmentIcon from 'vue-material-design-icons/Segment.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import EmoticonHappyOutlineIcon from 'vue-material-design-icons/EmoticonHappyOutline.vue'
import VectorLineIcon from 'vue-material-design-icons/VectorLine.vue'
import AccountFileTextOutlineIcon from 'vue-material-design-icons/AccountFileTextOutline.vue'
import BookOpenBlankVariantOutlineIcon from 'vue-material-design-icons/BookOpenBlankVariantOutline.vue'

const components = {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
  PlusThickIcon,
  MinusThickIcon,
  ArrowUpIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SegmentIcon,
  CloseIcon,
  EmoticonHappyOutlineIcon,
  VectorLineIcon,
  AccountFileTextOutlineIcon,
  BookOpenBlankVariantOutlineIcon,
  ChevronLeftIcon
}

export default defineNuxtPlugin(nuxtApp => {
    Object.entries(components).forEach(([name, component]) => {
        nuxtApp.vueApp.component(name, component)
    })
});
