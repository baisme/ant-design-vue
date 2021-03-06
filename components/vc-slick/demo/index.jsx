import SimpleSlider from './SimpleSlider';
import SlideChangeHooks from './SlideChangeHooks';
import MultipleItems from './MultipleItems';
import MultipleRows from './MultipleRows';
import Responsive from './Responsive';
import Resizable from './Resizable';
import UnevenSetsInfinite from './UnevenSetsInfinite';
import UnevenSetsFinite from './UnevenSetsFinite';
import CenterMode from './CenterMode';
import FocusOnSelect from './FocusOnSelect';
import AutoPlay from './AutoPlay';
import AutoPlayMethods from './AutoPlayMethods';
import PauseOnHover from './PauseOnHover';
import Rtl from './Rtl';
import VariableWidth from './VariableWidth';
import AdaptiveHeight from './AdaptiveHeight';
import LazyLoad from './LazyLoad';
import Fade from './Fade';
import SlickGoTo from './SlickGoTo';
import CustomArrows from './CustomArrows';
import PreviousNextMethods from './PreviousNextMethods';
import DynamicSlides from './DynamicSlides';
import VerticalMode from './VerticalMode';
import SwipeToSlide from './SwipeToSlide';
import VerticalSwipeToSlide from './VerticalSwipeToSlide';
import CustomPaging from './CustomPaging';
import CustomSlides from './CustomSlides';
import AsNavFor from './AsNavFor';
import AppendDots from './AppendDots';

export default {
  render() {
    return (
      <div class="content">
        <SimpleSlider />
        <MultipleItems />
        <MultipleRows />
        <Responsive />
        <Resizable />
        <UnevenSetsInfinite />
        <UnevenSetsFinite />
        <CenterMode />
        <FocusOnSelect />
        <AutoPlay />
        <AutoPlayMethods />
        <PauseOnHover />
        <Rtl />
        <VariableWidth />
        <AdaptiveHeight />
        <LazyLoad />
        <Fade />
        <SlideChangeHooks />
        <SlickGoTo />
        <CustomPaging />
        <CustomArrows />
        <CustomSlides />
        <PreviousNextMethods />
        <DynamicSlides />
        <VerticalMode />
        <SwipeToSlide />
        <VerticalSwipeToSlide />
        <AsNavFor />
        <AppendDots />
      </div>
    );
  },
};
