import * as Font from "expo-font";

export async function bootstrap() {
  await Font.loadAsync({
    "open-bold": requare("../assets/fonts/OpenSans-Bold.ttf"),
    "open-regular": requare("../assets/fonts/OpenSans-Regular.ttf"),
  });
}
