## Requirements

React Native apps may target iOS 12.4 and Android 5.0 (API 21) or newer. You may use macOS as your development operating system. Building and running iOS apps is limited to macOS.

## Installing dependencies
You will need Node, Watchman, the React Native command line interface. For iOS, you will need a Ruby version manager, Xcode and CocoaPods. For android, you will need a JDK and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build your React Native app for iOS and install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

##Node & Watchman
We recommend installing Node and Watchman using [Homebrew](http://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

```
brew install node
brew install watchman
```

If you have already installed Node on your system, make sure it is Node 14 or newer.

[Watchman](https://facebook.github.io/watchman) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

##React Native Command Line Interface
React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using `npx`, which ships with Node.js. With `npx react-native <command>`, the current stable version of the CLI will be downloaded and executed at the time the command is run.

##Ruby
React Native uses a `.ruby-version` file to make sure that your version of Ruby is aligned with what is needed. Currently, macOS 12.5.1 is shipped with Ruby 2.7.5, which is not what is required by React Native. Our suggestion is to install a Ruby version manager and to install the proper version of Ruby in your system.

To check what is your current version of Ruby, you can run this command:

```
ruby --version
```

##Bundler
[Bundler](https://bundler.io/) is a Ruby gem that helps managing the Ruby dependencies of your project. We need Ruby to install Cocoapods and using Bundler will make sure that all the dependencies are aligned and that the project works properly.

If you want to learn more about why we need this tool, you can read [this article](https://bundler.io/guides/rationale.html#bundlers-purpose-and-rationale).

##Xcode
The easiest way to install Xcode is via the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12). Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

If you have already installed Xcode on your system, make sure it is version 10 or newer.

###Command Line Tools
You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

![img.png](https://reactnative.dev/assets/images/GettingStartedXcodeCommandLineTools-8259be8d3ab8575bec2b71988163c850.png)

###Installing an iOS Simulator in Xcode
To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.

###CocoaPods
[CocoaPods](https://cocoapods.org/) is built with Ruby and it will be installable with the default Ruby available on macOS.

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

##Java Development Kit
We recommend installing the OpenJDK distribution called Azul Zulu using [Homebrew](http://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

```
brew tap homebrew/cask-versions
brew install --cask zulu11
```

The Zulu OpenJDK distribution offers JDKs for both Intel and M1 Macs. This will make sure your builds are faster on M1 Macs compared to using an Intel-based JDK.

If you have already installed JDK on your system, we recommend JDK 11. You may encounter problems using higher JDK versions.

##Android development environment
Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

###1. Install Android Studio
   Download and install Android Studio. While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

- `Android SDK`
- `Android SDK Platform`
- `Android Virtual Device`

Then, click "Next" to install all of these components.

If the checkboxes are grayed out, you will have a chance to install these components later on.

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

###2. Install the Android SDK
   Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 12 (S) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "More Actions" button and select "SDK Manager".

![img_1.png](https://reactnative.dev/assets/images/GettingStartedAndroidStudioWelcomeMacOS-64c618ea062865fedece6dd5f7b78fa4.png)

The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the `Android 12 (S)` entry, then make sure the following items are checked:

- `Android SDK Platform 31`
- `Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image or (for Apple M1 Silicon) Google APIs ARM 64 v8a System Image`

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 31.0.0 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

###3. Configure the ANDROID_SDK_ROOT environment variable
   The React Native tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc (if you are using zsh then ~/.zprofile or ~/.zshrc) config file:

```
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```

.bash_profile is specific to bash. If you're using another shell, you will need to edit the appropriate shell-specific config file.

Type source $HOME/.bash_profile for bash or source $HOME/.zprofile to load the config into your current shell. Verify that ANDROID_SDK_ROOT has been set by running echo $ANDROID_SDK_ROOT and the appropriate directories have been added to your path by running echo $PATH.

Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.
