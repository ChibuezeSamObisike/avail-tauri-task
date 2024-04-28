# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Steps - Developing Frontend Components

1. Setting up MUI themes and general configuration.
2. I seperated each layout parts of the screen to different components.
3. I created interfaces for typing when neccesary.
4. I used react router to set up the routing accross different screens and employed the use of the components MUI came with.

### Steps for setting up mobile app

1. Installation and configuring projects

   - Download XCode
   - Installation of RUST `curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh`
   - Setting config for iOS Targets

     - Rust Up
       `rustup target add aarch64-apple-ios x86_64-apple-ios aarch64-apple-ios-sim`
     - Home Brew `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
     - Cocoapods `brew install cocoapods`

   -

2. I created a tauri project using: `npm create tauri-app@latest -- --beta`, I set up all config, I tick the typescript, React and other config and set up the mobile access.

Then

```
cd my-tauri-app
npm install
npm run tauri dev
```

3. I installed the tauri cli

```
https://beta.tauri.app/references/cli/
```

I ran

```
npm run tauri ios dev
```
