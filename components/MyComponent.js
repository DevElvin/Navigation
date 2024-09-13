// import * as React from "react";
// import { ProgressBar, MD3Colors } from "react-native-paper";

// const MyComponent = () => {
//   const [timeProgress, setTimeProgress] = React.useState(0);

//   React.useEffect(() => {
//     function startTimer() {
//       console.log("Are you here");
//       if (timeProgress >= 1) {
//         setTimeProgress(0);
//       }
//     }
//     startTimer();
//     const timer = setTimeout(() => {
//       console.log("Here we go");
//       setTimeProgress((prevTime) => {
//         return prevTime + 0.01;
//       });
//     }, 500);
//     // console.log(timeProgress);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [timeProgress]);

//   return <ProgressBar progress={timeProgress} color={MD3Colors.error50} />;
// };

// export default MyComponent;

///
/*
import * as React from "react";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";

const MyComponent = () => {
  const [checked, setChecked] = React.useState("first");

  return (
    <View>
      <RadioButton
        value="first"
        status={checked === "first" ? "checked" : "unchecked"}
        onPress={() => setChecked("first")}
      />
      <RadioButton
        value="second"
        status={checked === "second" ? "checked" : "unchecked"}
        onPress={() => setChecked("second")}
      />
    </View>
  );
};

export default MyComponent;


import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";

const MyComponent = () => {
  const [value, setValue] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "walk",
            label: "Walking",
          },
          {
            value: "train",
            label: "Transit",
          },
          { value: "drive", label: "Driving" },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default MyComponent;

import * as React from "react";
import { Switch } from "react-native-paper";

const MyComponent = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export default MyComponent;


import * as React from "react";
import { TextInput } from "react-native-paper";

const MyComponent = () => {
  const [text, setText] = React.useState("text");

  return (
    <TextInput
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"
      right={<TextInput.Affix text="/100" />}
    />
  );
};

export default MyComponent;

import * as React from "react";
import { IconButton, Tooltip } from "react-native-paper";

const MyComponent = () => (
  <Tooltip title="Selected Camera">
    <IconButton icon="camera" selected size={24} onPress={() => {}} />
  </Tooltip>
);

export default MyComponent;
*/
import * as React from "react";
import { View } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";

const MyComponent = () => (
  <TouchableRipple
    onPress={() => console.log("Pressed")}
    rippleColor="rgba(0, 0, 0, .32)"
  >
    <Text>Press anywhere</Text>
  </TouchableRipple>
);

export default MyComponent;
