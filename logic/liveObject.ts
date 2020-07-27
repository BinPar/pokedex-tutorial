/**
 * Interface used by all Live Objects
 */
export interface LiveObject {
  // _lo stores all the information about the LiveObject
  _lo: {
    // Live Object Type Name (similar to collection)
    type: string;
    // Unique ID of the live object
    id: string;
    // Auto incremental version number
    v: number;
    // Number of subscriptions (only in client Side)
    n?: number;
  };
}

/**
 * Interface used to define a Live Object Collection
 */
export interface LiveCollection<T extends LiveObject>  {
  /**
   * Unique name of the collection
   */
  type: string;
  /**
   * Function that will be used to restore a LiveObject
   * (typically from database)   
  * @param id {string} unique identifier of the document
  * @returns restored document or null in case it do not exists
  */
  loadLiveObject: (id: string) => Promise<T>;
  /**
   * Function that will be used to save LiveObject
   * (typically to database)   
  * @param obj {T} Document to save
  */
  saveLiveObject: (obj: T) => Promise<void>;
  /**
   * Function that will be used to delete a LiveObject
   * (typically in the database)   
  * @param id {string} unique identifier of the document
  */
  deleteLiveObject: (id: string) => Promise<void>;
}

export interface Document extends LiveObject {
  title: string;
  subtitle: string;
}


const collection = db.collection('documents');

const DocumentDefinition: LiveObjectDefinition<Document> = {
  type: 'Document',
  loadLiveObject: async (id) => {
    return await collection.findOne({_id: id},{ projection: { '__lo': 1, title: 1, subtitle: 1}}) as Document;
  },
  saveLiveObject: async (obj) => {
    await collection.updateOne(
      { _id: obj._lo.id },
      { $set: { ...obj } },
      { upsert: true }
    );
  },
  deleteLiveObject: async (id) => {
    await collection.deleteOne({_id: id});
  },
}

export default DocumentDefinition;


/**
 * Ping method
 */
const ping = async (): Promise<string> => {
  return "pong";
};

export default ping;