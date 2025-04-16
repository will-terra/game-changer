import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpringCarousel } from "react-spring-carousel";
import {
  selectActiveItemId,
  setActiveItemId,
  setItems,
  selectActiveIndex,
  CarouselItemWithRender,
} from "../carouselSlice";

export function useCarousel(items: CarouselItemWithRender[], initialItem = 0) {
  const dispatch = useDispatch();
  const activeItemId = useSelector(selectActiveItemId);
  const activeIndex = useSelector(selectActiveIndex);

  useEffect(() => {
    const serializableItems = items.map(({ render, ...item }) => ({
      ...item,
    }));

    dispatch(setItems(serializableItems));
  }, [dispatch, items]);

  const carouselItems = useCallback(() => {
    return items.map((item, index) => {
      const itemId = `item-${index + 1}`;
      return {
        id: itemId,
        renderItem: (
          <div key={itemId}>{item.render(itemId === activeItemId)}</div>
        ),
      };
    });
  }, [items, activeItemId]);

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    getCurrentActiveItem,
    slideToItem,
  } = useSpringCarousel({
    withLoop: true,
    initialActiveItem: initialItem + 1,
    items: carouselItems(),
  });

  const updateActiveItem = useCallback(() => {
    const current = getCurrentActiveItem();
    if (current && current.id !== activeItemId) {
      dispatch(setActiveItemId(current.id));
    }
  }, [getCurrentActiveItem, activeItemId, dispatch]);

  useEffect(() => {
    updateActiveItem();
  }, []);

  const handleNavigate = useCallback(
    (direction: "next" | "prev") => {
      if (direction === "next") {
        slideToNextItem();
      } else {
        slideToPrevItem();
      }
      setTimeout(updateActiveItem, 100);
    },
    [slideToPrevItem, slideToNextItem, updateActiveItem],
  );

  const handleSelectItem = useCallback(
    (index: number) => {
      slideToItem(`item-${index + 1}`);
      setTimeout(updateActiveItem, 100);
    },
    [slideToItem, updateActiveItem],
  );

  return {
    carouselFragment,
    activeIndex,
    handleNavigate,
    handleSelectItem,
    itemsCount: items.length,
  };
}
