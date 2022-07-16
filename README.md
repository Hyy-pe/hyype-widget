# Lore Widget
Hyype widget is a React component that can be easily imported into any react-based web3  application. With the hyype widget, your can enabled your community to share lore using Hyype APIs natively inside your apps without ever interact with hyype's webapp.

[Documentation](https://docs.hyy.pe/api-reference/lore-react-component)

![2222](https://user-images.githubusercontent.com/1647155/179365438-c2c2c0af-6d6c-48a7-a810-8246722b9276.png)

## Installation
Install the widget library via yarn
```
$ yarn add @hyype/widget
```

Or, install via npm
```
$ npm install –save @hyype/widget
```

and then add the widget to your app
```
import { HyypeWidget } from '@hyype/widget';

function App() {
<div className="Hyype">
<HyypeWidget
          web3Provider={web3Provider}
          clientId={REACT_APP_CLIENT_ID}
          contractAddress={REACT_APP_CONTRACT_ADDRESS}
          tokenId={REACT_APP_TOKEN_ID}
          platformSpecificSigningMessage={REACT_APP_MESSAGE}
          env={REACT_APP_ENV}
          width={REACT_APP_WIDTH}
          theme={theme}
/>
</div>
}
```
That’s it. You will now be able to see a functional Lore editor widget on your app in your chosen UI segment.

The widget has a minimum height of 976px and minimum width of 320px. You can customize the width by passing a number (of pixels) to the width prop of the widget.
```
function App() {
  <div className="Hyype">
    <HyypeWidget
      	web3Provider={web3Provider}
   	…
      	width={520} // Custom width in pixels
    />
  </div>
}
```
## Widget Parameters
### Mandatory
#### web3Provider
The widget requires a web3 provider to sign your lore message through the user’s connected wallet. If you’re building a dApp, you probably have a web3 provider already. Both the ethers and web3.js provider objects are compatible with the widget, as is any EIP-1193 provider. You can pass this directly into the web3Provider prop.

Unless the user connects their wallet, the widget will be in disabled state and they will not be able to write a lore. If you don’t have a web3 provider yet, you can add a wallet connect flow to your app by using a library such as web3-react, BlockNative’s Onboard, or Aragon’s useWallet().

#### clientId
Hyype Client ID (clientId) is an equivalent to an API key which helps us identify and provide production-grade limits for your demand and experiences. The hyy.pe client id is used in the lore POST api request header.

#### contractAddress
This is the NFT project's contract address you’re going to post a lore for. This is used to get the available lore tags of a collection, to get the details of an underlying token inside this contract.
e.g. for Doodle #9952 - the contractAddress will be 0x8a90cab2b38dba80c64b7734e58ee1db38b8992e

#### tokenId
This is the token’s Id you’re going to post a lore for. This is used to get the details of a token and to post a lore. Only the token owner and the NFT creator of the project can post a lore for the token. 
e.g. for Doodle #9952 - the token id will be 9952

#### platformSpecificSigningMessage
This is the text string which is displayed while requesting a signature from the user at the time of posting the lore. This is unique to your client-id. Learn more about this here [https://docs.hyy.pe/api-reference/post-methods/creating-a-signed-message](https://docs.hyy.pe/api-reference/post-methods/creating-a-signed-message)

#### env
env stands for development environment selection. This variable points to the sandbox or production api domain on hyy.pe

----

### Optional
Hyype Widget accepts the following customization parameters:
| Text           | Description                                                                                                                                  |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| callToAction   | This is the text string developers can use to display on their posting button. e.g. "Post Lore"                                              |
| tokenName      | This is used to show a different token name than the hyype provided token name in the editor UI. e.g. "Doodle #9952"                         |
| tokenThumbnail | This is used to display a different image than the one fetched from the hyype API (accepts absolute URL)                                     |
| header         | This is used to overwrite the default header text. Default is “Let’s share about”.                                                           |
| subHeader      | This is used to overwrite the default sub header text. Default is “Select the type of lore”.                                                 |
| theme          | You can pass various predefined css properties to customize the widget appearance. Learn more about theming below. |


## Cutomise the theme
Check out the detailed guide on how to customise the UI of the widge to match your theme 
[https://docs.hyy.pe/api-reference/lore-react-component/theming](https://docs.hyy.pe/api-reference/lore-react-component/theming)

## Supported content types
Hyype Lore widget will support the following capabilities to start with: 
- Text 
- Heading 
- Image (accepts jpg, png, gif, etc relevant formats) 
- Quote 
- Delimiter 
- List 
- Embed (Direct pasting of embed allowed domains URLs like youtube)

Not supported at the moment:
- Code
- Tables 
- Raw HTML

