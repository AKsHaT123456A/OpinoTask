import { useCallback, useMemo, useRef, useState } from "react";
import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Dimensions } from "react-native";

const useBottomSheet = () => {
  const [bottomSheetQuestion, setBottomSheetQuestion] = useState<string>("");
  const [bottomSheetLogo, setBottomSheetLogo] = useState<any>(null);
  const [bottomSheetYesOdds, setBottomSheetYesOdds] = useState<string>("");
  const [bottomSheetNoOdds, setBottomSheetNoOdds] = useState<string>("");
  const [isYes, setIsYes] = useState<boolean>(true);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(
    () => [
      Dimensions.get("window").height / 4,
      Dimensions.get("window").height / 1.6,
    ],
    []
  );

  const handleDataTransfer = (
    question: string,
    logo: any,
    yesOdds: string,
    noOdds: string,
    isYes: boolean
  ) => {
    setBottomSheetQuestion(question);
    setBottomSheetLogo(logo);
    setBottomSheetYesOdds(yesOdds);
    setBottomSheetNoOdds(noOdds);
    setIsYes(isYes);
  };

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseBottomSheet = useCallback(() => {
    bottomSheetModalRef.current?.dismiss(); 
  }, []);

  const handleSheetChanges = useCallback((index: number) => {}, []);

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} />,
    []
  );

  return {
    bottomSheetModalRef,
    handlePresentModalPress,
    handleCloseBottomSheet,
    handleDataTransfer,
    isYes,
    bottomSheetQuestion,
    bottomSheetLogo,
    bottomSheetYesOdds,
    bottomSheetNoOdds,
    handleSheetChanges,
    renderBackdrop,
    snapPoints
  };
};

export default useBottomSheet;
