import { PartialStateUpdater } from '@ngrx/signals';
import { AppSlice } from './app.slice';
import { ExpertsType } from './custom-features/with-experts/with-experts.slice';

export function setIsScrolled(value: number): PartialStateUpdater<AppSlice> {
  return (state) => {
    let isScrolledTemp = state.isScrolled;
    if (value <= 60 && isScrolledTemp) {
      isScrolledTemp = false;
    }
    if (value > 100 && !isScrolledTemp) {
      isScrolledTemp = true;
    }
    return {
      isScrolled: isScrolledTemp,
    };
  };
}
// export function toggleIsLiked(
//   type: ExpertsType,
//   expertId: string,
// ): PartialStateUpdater<AppSlice> {
//   return (state) => {
//     return {
//       experts: {
//         ...state.experts,
//         [type]: {
//           ...state.experts[type],
//           items: [...state.experts[type].items.map((item) => {
//             if (item.id === expertId) {
//               console.log('🚀 ~ toggleIsLiked ~ item:', item);
//               return {
//                 ...item,
//                 isLiked: !item.isLiked,
//               };
//             }
//             return item;
//           })],
//         },
//       },
//     };
//   };
// }
