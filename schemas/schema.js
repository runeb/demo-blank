// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    // https://www.sanity.io/docs/schema-types/document-type
    {
      title: "Post",
      name: "post",
      type: "document",
      fields: [
        // Add schema types here
        // https://www.sanity.io/docs/schema-types/string-type
        {
          title: "Title",
          name: "title",
          type: "string"
        },
        // https://www.sanity.io/docs/schema-types/block-type
        {
          title: "Body",
          name: "body",
          type: "array",
          of: [{ type: "block" }, { type: "geopoint" }]
        }
      ],
      liveEdit: false
    }
  ])
});
