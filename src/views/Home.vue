
    <template>
  <v-container fluid>
    <v-row justify="start">
      <v-col cols="4">
        <v-card width="400">
          <v-sheet class="pa-2 warning">
            <v-text-field
              v-model="search"
              label="Search"
              dark
              flat
              solo-inverted
              hide-details
              clearable
              clear-icon="mdi-close-circle-outline"
            ></v-text-field>
          </v-sheet>
          <v-card-text>
            <v-treeview
              dense
              activatable
              :items="items"
              open-all
              :search="search"
              :filter="filter"
            >
              <template v-slot:prepend="{ item, open }">
                <v-icon v-if="!item.file">
                  {{ open ? "mdi-folder-open" : "mdi-folder" }}
                </v-icon>
                <v-icon v-else>
                  {{ files[item.file] }}
                </v-icon>
              </template>
            </v-treeview>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <TreeProps />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TreeProps from "../components/TreeProps.vue";
export default {
  components: { TreeProps },

  data: () => ({
    search: null,
    caseSensitive: false,
    files: {
      html: "mdi-language-html5",
      js: "mdi-nodejs",
      json: "mdi-code-json",
      md: "mdi-language-markdown",
      pdf: "mdi-file-pdf",
      png: "mdi-file-image",
      txt: "mdi-file-document-outline",
      xls: "mdi-file-excel",
    },
    items: [
      {
        id: 1,
        name: "Applications :",
        children: [
          { id: 2, name: "Calendar : app", file: "html" },
          { id: 3, name: "Chrome : app", file: "js" },
          { id: 4, name: "Webstorm : app", file: "xls" },
        ],
      },
      {
        id: 5,
        name: "Documents :",
        children: [
          {
            id: 6,
            file: "json",
            name: "vuetify : ",
            children: [
              {
                id: 7,
                name: "src :",
                children: [
                  { id: 8, name: "index : ts", file: "js" },
                  { id: 9, name: "bootstrap : ts", file: "json" },
                ],
              },
            ],
          },
          {
            id: 10,
            name: "material2 :",
            file: "png",
            children: [
              {
                id: 11,
                name: "src :",
                file: "pdf",
                children: [
                  { id: 12, name: "v-btn : ts", file: "html" },
                  { id: 13, name: "v-card : ts", file: "md" },
                  { id: 14, name: "v-window : ts", file: "js" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: "Downloads :",
        children: [
          { id: 16, name: "October : pdf", file: "js" },
          { id: 17, name: "November : pdf", file: "html" },
          { id: 18, name: "Tutorial : html", file: "json" },
        ],
      },
      {
        id: 19,
        name: "Videos :",
        children: [
          {
            id: 20,
            name: "Tutorials :",
            file: "pdf",
            children: [
              { id: 21, name: "Basic layouts : mp4", file: "js" },
              { id: 22, name: "Advanced techniques : mp4", file: "txt" },
              { id: 23, name: "All about app : dir", file: "txt" },
            ],
          },
          { id: 24, name: "Intro : mov", file: "js" },
          { id: 25, name: "Conference introduction : avi", file: "txt" },
        ],
      },
    ],
  }),
  computed: {
    filter() {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined;
    },
  },
};
</script>

