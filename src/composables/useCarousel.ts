import { computed, ref } from 'vue'

export const useCarousel = (itemsCount: number) => {
  const currentIndex = ref(0)

  const canGoPrev = computed(() => currentIndex.value > 0)
  const canGoNext = computed(() => currentIndex.value < itemsCount - 1)

  const goNext = () => {
    if (!canGoNext.value) return
    currentIndex.value += 1
  }

  const goPrev = () => {
    if (!canGoPrev.value) return
    currentIndex.value -= 1
  }

  const goTo = (index: number) => {
    if (index < 0 || index >= itemsCount) return
    currentIndex.value = index
  }

  return {
    currentIndex,
    canGoNext,
    canGoPrev,
    goNext,
    goPrev,
    goTo,
  }
}
