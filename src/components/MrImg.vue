<template>
  <img
    v-if="pathToFile"
    :src="pathToFile"
    :alt="alt"
  />
</template>

<script lang="ts">
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { defineComponent, computed } from 'vue';

async function fetch_img_b64(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  const base64Data = await convertBlobToBase64(blob) as string;
  //const ext = url.split('.').pop();
  //return 'data:image/' + ext + ';base64,'+ base64Data;
  return base64Data;
}

// Ref: https://forum.ionicframework.com/t/how-to-download-an-image-then-store-it-on-the-device/199841
const convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader;
  reader.onerror = reject;
  reader.onload = () => {
    resolve(reader.result);
  };
 reader.readAsDataURL(blob);
});

export default defineComponent({
  name: 'MrImg',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      pathToFile: ""
    };
  },
  methods: {
    async getImageFromAppData() {

      const contents = await Filesystem.readFile({
          path: this.fileNameEncoded,
          directory: Directory.Cache,
          encoding: Encoding.UTF8,
      });
      console.log("MrImg: loaded", this.fileNameEncoded);

      this.pathToFile = contents.data;
    },
    async saveImageToAppData() {
      let img = await fetch_img_b64(this.src);
      let res = await Filesystem.writeFile({
          path: this.fileNameEncoded,
          data: img,
          directory: Directory.Cache,
          encoding: Encoding.UTF8,
      });
      console.log("MrImg: saved", this.fileNameEncoded);
      this.pathToFile = img;
    }
  },
  computed: {
    /**
     * Encodes all characters that are not file system safe in a lossless manner.
     *
     * @return {String} Encoded file safe version of URL
     */
    fileNameEncoded: function () {
      let url = this.src;
      url = url.split(' ').join('[nbsp]');
      url = url.split('\\').join('[bsol]');
      url = url.split('/').join('[sol]');
      url = url.split(':').join('[colon]');
      url = url.split('*').join('[ast]');
      url = url.split('?').join('[quest]');
      url = url.split('"').join('[quot]');
      url = url.split('<').join('[lt]');
      url = url.split('>').join('[gt]');
      url = url.split('|').join('[pipe]');
      return url;
    },
  },
  created: async function () {
    try {
        await this.getImageFromAppData(); 
        console.log("MrImg: loaded from cache", this.src);
    } catch (error) {
        try {
           await this.saveImageToAppData(); 
           console.log("MrImg: saved to cache", this.src);
        } catch (error) {
            this.pathToFile = this.src;
            console.log("MrImg: from web", this.src);
        }
    }
  }
});
</script>
