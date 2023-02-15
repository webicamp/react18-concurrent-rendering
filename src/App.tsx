import { useMemo, useState, useTransition } from "react";
import Slider from "./components/Slider/Slider";
import Box from "./components/Box/Box";
import { MAX_LENGTH } from "./utils/constants";
import { createNumberArr } from "./utils/helpers";
import styles from "./App.module.css";

function App() {
  const [multiplier, setMultiplier] = useState(1);
  const [isPending, startTransition] = useTransition();

  const numbersArr = useMemo(
    () => createNumberArr(MAX_LENGTH, multiplier),
    [multiplier]
  );

  const handleChange = (value: number) => {
    startTransition(() => {
      setMultiplier(value);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <Slider onChange={handleChange} min={1} max={10} />
      </div>
      <div className={styles.boxesContainer}>
        {isPending ? (
          <>Loading...</>
        ) : (
          numbersArr.map((i) => <Box value={i} key={i} />)
        )}
      </div>
    </div>
  );
}

export default App;
