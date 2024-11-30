# Appp do Forro da Lua Cheia

## Configure Ambient

### All Ambientes:

- NodeJs Version: `16.20.0`
- Install ionic global:
  - `npm install -g @ionic/cli`

## Android:

- Create `local.properties` file on `android/` with that content:
```
sdk.dir = /home/$USER/Android/Sdk/
cmake.dir = /home/$USER/Android/Sdk/cmake/$CMAKE_VERSION
```
- Install adb: `sudo apt install android-tools-adb android-tools-fastboot`

---

## Development

### All Ambientes:
- Go to ambient branch:
  `git checkout android|ios`
- Install packages:
  `npm install`
- Edit files an see editions with fast rebuild on browser:
  `npm run serve`
- Build content files to generate apps (android and ios):
  `npm run build`
- Generate splash screen and ic_laucher to android and ios
  - Save `.png` icons on resources folder and
  `npm run generate-splash`
- If you have the app installed before the build, uninstall it, because the app save on storage the old images and you needs remove to edit
- Remove all images from the builds folders to app update with your images editions
  - On android its localizated o `android/app/src/main/assets/public` so run `sudo rm -r android/app/src/main/assets/public`
  - On ios its localizated o `ios/App/App/public` so run `sudo rm -r ios/App/App/public`

### Android

- Build apk and install on emulator device:
  - Start emulator
  - Note the emulator name with: `adb devices | grep -v '^$' | tail -n 1 | awk '{print $2}'`
  - Change the emulator-5554 name on package.json to emulator name noted
  - Run `npm run android`
(If have some error, open the Android Studio with (`npx ionic cap open android`) and build app with IDE)

### IOS

- Run `npm run ios`
- On Xcode, build app
(If Xcode build return some error, comment the lines with careful to don't remove important things and build again)

## Production

### Android

- Open Project at Android Studio IDE
- Go to menu on top and click and Build -> Build Signed App Bundle
- Select Android App Bundle
- Select `mr-android.keystore` file
- Set Helen global pass on Key store password field
- Select `mr-android-key` on Key Alias
- Set Helen global pass on Key password field 
- Select Release and build the bundle app
- Upload as new version o google play console

### IOS

- Open Project at XCode IDE
- On `App Store Connect`, Create a new version of App with Text and Prints changes
- Login on `SignIn` Menu with Helen iCloud account (because she is developer of app)
- On top of bar, select Any iOS Device (arm64)
- On menu select Product -> Archive
- Wait package and when finish click in `Distribute App`