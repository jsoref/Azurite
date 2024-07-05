// Contains Mocks for Serialization Tests

export default class SerializationRequestMockStrings {
  // ####################
  // Mocks for a batch of 3 Inserts using the JavaScript SDK
  // ####################
  // prettier-ignore
  public static Sample3InsertsUsingSDK: string ='--batch_7679a9f9b2dde130e791580c53508a5a\ncontent-type: multipart/mixed;charset="utf-8";boundary=changeset_7679a9f9b2dde130e791580c53508a5a\n\n--changeset_7679a9f9b2dde130e791580c53508a5a\ncontent-type: application/http\ncontent-transfer-encoding: binary\n\nPOST http://127.0.0.1:11002/devstoreaccount1/table160837408807101776 HTTP/1.1\nPrefer: return-content\ncontent-length: 76\ncontent-type: application/json;type=entry\naccept: application/json;odata=minimalmetadata\nmaxdataserviceversion: 3.0;NetFx\n\n{"PartitionKey":"part1","RowKey":"row160837408812000231","myValue":"value1"}\n--changeset_7679a9f9b2dde130e791580c53508a5a\ncontent-type: application/http\ncontent-transfer-encoding: binary\n\nPOST http://127.0.0.1:11002/devstoreaccount1/table160837408807101776 HTTP/1.1\nPrefer: return-content\ncontent-length: 76\ncontent-type: application/json;type=entry\naccept: application/json;odata=minimalmetadata\nmaxdataserviceversion: 3.0;NetFx\ncontent-id: 1\n\n{"PartitionKey":"part1","RowKey":"row160837408812008370","myValue":"value1"}\n--changeset_7679a9f9b2dde130e791580c53508a5a\ncontent-type: application/http\ncontent-transfer-encoding: binary\n\nPOST http://127.0.0.1:11002/devstoreaccount1/table160837408807101776 HTTP/1.1\nPrefer: return-content\ncontent-length: 76\ncontent-type: application/json;type=entry\naccept: application/json;odata=minimalmetadata\nmaxdataserviceversion: 3.0;NetFx\ncontent-id: 2\n\n{"PartitionKey":"part1","RowKey":"row160837408812003154","myValue":"value1"}\n--changeset_7679a9f9b2dde130e791580c53508a5a--\n--batch_7679a9f9b2dde130e791580c53508a5a--';

  // ####################
  // Mocks for a batch containing single retrieve entity using the JavaScript SDK
  // ####################
  // prettier-ignore
  public static Sample1QueryUsingSDK: string = "--batch_d737e1b79cb362526a8b4a13d46d6fc3\ncontent-type: application/http\ncontent-transfer-encoding: binary\n\nGET http://127.0.0.1:11002/devstoreaccount1/table160837567141205013(PartitionKey=%27part1%27,RowKey=%27row160837567145205850%27) HTTP/1.1\naccept: application/json;odata=minimalmetadata\nmaxdataserviceversion: 3.0;NetFx\n\n--batch_d737e1b79cb362526a8b4a13d46d6fc3--";

  // ####################
  // Mocks for a batch with insert then merge using the JavaScript SDK
  // ####################
  // prettier-ignore
  public static SampleInsertThenMergeUsingSDK: string = '--batch_aa71f86e6ed5d85b178b2a28cbb61f97\ncontent-type: multipart/mixed;charset="utf-8";boundary=changeset_aa71f86e6ed5d85b178b2a28cbb61f97\n\n--changeset_aa71f86e6ed5d85b178b2a28cbb61f97\ncontent-type: application/http\ncontent-transfer-encoding: binary\n\nPOST http://127.0.0.1:11002/devstoreaccount1/table160837770303307822 HTTP/1.1\nPrefer: return-content\ncontent-length: 76\ncontent-type: application/json;type=entry\naccept: application/json;odata=minimalmetadata\nmaxdataserviceversion: 3.0;NetFx\n\n{"PartitionKey":"part1","RowKey":"row160837770307508823","myValue":"value2"}\n--changeset_aa71f86e6ed5d85b178b2a28cbb61f97\ncontent-type: application/http\ncontent-transfer-encoding: binary\n\nMERGE http://127.0.0.1:11002/devstoreaccount1/table160837770303307822(PartitionKey=%27part1%27,RowKey=%27row160837770307508823%27) HTTP/1.1\nif-match: *\ncontent-length: 76\ncontent-type: application/json;type=entry\naccept: application/json;odata=minimalmetadata\nmaxdataserviceversion: 3.0;NetFx\ncontent-id: 1\n\n{"PartitionKey":"part1","RowKey":"row160837770307508823","myValue":"valueMerge"}\n--changeset_aa71f86e6ed5d85b178b2a28cbb61f97--\n--batch_aa71f86e6ed5d85b178b2a28cbb61f97--';

  // ####################
  // Mocks for a batch of 3 Deletes using the JavaScript SDK
  // ####################
  // prettier-ignore
  public static Sample3DeletesUsingSDK: string = '--batch_2d60b21ff9edaf2bc1bc4f60664c0283\ncontent-type: multipart/mixed;charset="utf-8";boundary=changeset_2d60b21ff9edaf2bc1bc4f60664c0283\n\n--changeset_2d60b21ff9edaf2bc1bc4f60664c0283\ncontent-type: application/http\ncontent-transfer-encoding: binary\n\nDELETE http://127.0.0.1:11002/devstoreaccount1/table161216830457901592(PartitionKey=%27part1%27,RowKey=%27row161216830462208585%27) HTTP/1.1\nif-match: *\naccept: application/json;odata=minimalmetadata\nmaxdataserviceversion: 3.0;NetFx\n\n\n--changeset_2d60b21ff9edaf2bc1bc4f60664c0283\ncontent-type: application/http\ncontent-transfer-encoding: binary\n\nDELETE http://127.0.0.1:11002/devstoreaccount1/table161216830457901592(PartitionKey=%27part1%27,RowKey=%27row161216830462204546%27) HTTP/1.1\nif-match: *\naccept: application/json;odata=minimalmetadata\nmaxdataserviceversion: 3.0;NetFx\ncontent-id: 1\n\n\n--changeset_2d60b21ff9edaf2bc1bc4f60664c0283\ncontent-type: application/http\ncontent-transfer-encoding: binary\n\nDELETE http://127.0.0.1:11002/devstoreaccount1/table161216830457901592(PartitionKey=%27part1%27,RowKey=%27row161216830462201168%27) HTTP/1.1\nif-match: *\naccept: application/json;odata=minimalmetadata\nmaxdataserviceversion: 3.0;NetFx\ncontent-id: 2\n\n\n--changeset_2d60b21ff9edaf2bc1bc4f60664c0283--\n--batch_2d60b21ff9edaf2bc1bc4f60664c0283--';

  // ####################
  // Mocks for Query with Partition and Row Key (Retrieve single entity)
  // ####################
  // prettier-ignore
  public static BatchQueryWithPartitionKeyAndRowKeyRequest: string =
  "--batch_d54a6553104c5b65f259aa178d324ebf\ncontent-type: application/http\ncontent-transfer-encoding: binary\n\nGET http://127.0.0.1:11002/devstoreaccount1/table161289070041408231(PartitionKey=%27part1%27,RowKey=%27row161289070046904593%27) HTTP/1.1\naccept: application/json;odata=minimalmetadata\nmaxdataserviceversion: 3.0;NetFx\n\n--batch_d54a6553104c5b65f259aa178d324ebf--";

  // ####################
  // Mocks for Single Batch Insert or Replace
  // ####################
  public static BatchSingleInsertOrReplaceRequestString: string =
    // "--batch_d691a4531b1f15df5b381893a422ead1\ncontent-type: multipart/mixed;charset=\"utf-8\";boundary=changeset_d691a4531b1f15df5b381893a422ead1\n\n--changeset_d691a4531b1f15df5b381893a422ead1\ncontent-type: application/http\ncontent-transfer-encoding: binary\n\nPUT http://127.0.0.1:11002/devstoreaccount1/table161311975539604802(PartitionKey=%27part1%27,RowKey=%27row161311975544100305%27) HTTP/1.1\ncontent-length: 76\ncontent-type: application/json;type=entry\naccept: application/json;odata=minimalmetadata\nmaxdataserviceversion: 3.0;NetFx\n\n{\"PartitionKey\":\"part1\",\"RowKey\":\"row161311975544100305\",\"myValue\":\"value1\"}\n--changeset_d691a4531b1f15df5b381893a422ead1--\n--batch_d691a4531b1f15df5b381893a422ead1--"
    // prettier-ignore
    "--batch_d691a4531b1f15df5b381893a422ead1\ncontent-type: multipart/mixed;charset=\"utf-8\";boundary=changeset_d691a4531b1f15df5b381893a422ead1\n\n--changeset_d691a4531b1f15df5b381893a422ead1\ncontent-type: application/http\ncontent-transfer-encoding: binary\n\nPUT http://127.0.0.1:11002/devstoreaccount1/table161311975539604802(PartitionKey=%27part1%27,RowKey=%27row161311975544100305%27) HTTP/1.1\ncontent-length: 76\ncontent-type: application/json;type=entry\naccept: application/json;odata=minimalmetadata\nmaxdataserviceversion: 3.0;NetFx\n\n{\"PartitionKey\":\"part1\",\"RowKey\":\"row161311975544100305\",\"myValue\":\"value1\"}\n--changeset_d691a4531b1f15df5b381893a422ead1--\n--batch_d691a4531b1f15df5b381893a422ead1--";

  // ####################
  // Mocks for Single Batch Insert or Replace
  // ####################
  public static BatchSingleDeleteRequestString: string =
    // "--batch_45ff59679ba7159ade46401b1d670939\ncontent-type: multipart/mixed;charset=\"utf-8\";boundary=changeset_45ff59679ba7159ade46401b1d670939\n\n--changeset_45ff59679ba7159ade46401b1d670939\ncontent-type: application/http\ncontent-transfer-encoding: binary\n\nDELETE http://127.0.0.1:11002/devstoreaccount1/table161314571276801774(PartitionKey=%27part1%27,RowKey=%27row161314571280802822%27) HTTP/1.1\nif-match: *\naccept: application/json;odata=minimalmetadata\nmaxdataserviceversion: 3.0;NetFx\n\n\n--changeset_45ff59679ba7159ade46401b1d670939--\n--batch_45ff59679ba7159ade46401b1d670939--"
    // prettier-ignore
    "--batch_45ff59679ba7159ade46401b1d670939\ncontent-type: multipart/mixed;charset=\"utf-8\";boundary=changeset_45ff59679ba7159ade46401b1d670939\n\n--changeset_45ff59679ba7159ade46401b1d670939\ncontent-type: application/http\ncontent-transfer-encoding: binary\n\nDELETE http://127.0.0.1:11002/devstoreaccount1/table161314571276801774(PartitionKey=%27part1%27,RowKey=%27row161314571280802822%27) HTTP/1.1\nif-match: *\naccept: application/json;odata=minimalmetadata\nmaxdataserviceversion: 3.0;NetFx\n\n\n--changeset_45ff59679ba7159ade46401b1d670939--\n--batch_45ff59679ba7159ade46401b1d670939--";

  // ####################
  // Mocks for non GUID form boundaries
  // ####################
  public static BatchNonGuidBoundaryShortString: string =
    // prettier-ignore
    "--batch_blahblahblah\r\nContent-Type: multipart/mixed; boundary=blahblah\r\n\r\n--changeset_0ac4036e-9ea9-4dfc-90c3-66a95213b6b0\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPUT http://127.0.0.1:10002/devstoreaccount1/SampleHubVSHistory";

  // ####################
  // Mocks for Durable Functions Request in E1_HelloSequence
  // ####################
  public static BatchDurableE1HelloRequestString: string =
    // "--batch_35c74636-e91e-4c4f-9ab1-906881bf7d9d\r\nContent-Type: multipart/mixed; boundary=changeset_0ac4036e-9ea9-4dfc-90c3-66a95213b6b0\r\n\r\n--changeset_0ac4036e-9ea9-4dfc-90c3-66a95213b6b0\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPUT http://127.0.0.1:10002/devstoreaccount1/SampleHubVSHistory(PartitionKey='a572042d48964354b246501e57ac17a2',RowKey='0000000000000000') HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nDataServiceVersion: 3.0;\r\n\r\n{\"EventId\":-1,\"IsPlayed\":false,\"_Timestamp\":\"2021-02-25T07:58:15.2007575Z\",\"_Timestamp@odata.type\":\"Edm.DateTime\",\"EventType\":\"OrchestratorStarted\",\"ExecutionId\":\"a747299cd8ec44a8a7ba9a73e93facb1\"}\r\n--changeset_0ac4036e-9ea9-4dfc-90c3-66a95213b6b0\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPUT http://127.0.0.1:10002/devstoreaccount1/SampleHubVSHistory(PartitionKey='a572042d48964354b246501e57ac17a2',RowKey='0000000000000001') HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nDataServiceVersion: 3.0;\r\n\r\n{\"Name\":\"E1_HelloSequence\",\"Version\":\"\",\"OrchestrationInstance\":\"{\\\"InstanceId\\\":\\\"a572042d48964354b246501e57ac17a2\\\",\\\"ExecutionId\\\":\\\"a747299cd8ec44a8a7ba9a73e93facb1\\\"}\",\"EventId\":-1,\"IsPlayed\":true,\"_Timestamp\":\"2021-02-25T07:58:15.0274133Z\",\"_Timestamp@odata.type\":\"Edm.DateTime\",\"EventType\":\"ExecutionStarted\",\"ExecutionId\":\"a747299cd8ec44a8a7ba9a73e93facb1\"}\r\n--changeset_0ac4036e-9ea9-4dfc-90c3-66a95213b6b0\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPUT http://127.0.0.1:10002/devstoreaccount1/SampleHubVSHistory(PartitionKey='a572042d48964354b246501e57ac17a2',RowKey='0000000000000002') HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nDataServiceVersion: 3.0;\r\n\r\n{\"Name\":\"E1_SayHello\",\"Version\":\"\",\"EventId\":0,\"IsPlayed\":false,\"_Timestamp\":\"2021-02-25T07:58:15.2330710Z\",\"_Timestamp@odata.type\":\"Edm.DateTime\",\"EventType\":\"TaskScheduled\",\"ExecutionId\":\"a747299cd8ec44a8a7ba9a73e93facb1\"}\r\n--changeset_0ac4036e-9ea9-4dfc-90c3-66a95213b6b0\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPUT http://127.0.0.1:10002/devstoreaccount1/SampleHubVSHistory(PartitionKey='a572042d48964354b246501e57ac17a2',RowKey='0000000000000003') HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nDataServiceVersion: 3.0;\r\n\r\n{\"EventId\":-1,\"IsPlayed\":false,\"_Timestamp\":\"2021-02-25T07:58:15.2338262Z\",\"_Timestamp@odata.type\":\"Edm.DateTime\",\"EventType\":\"OrchestratorCompleted\",\"ExecutionId\":\"a747299cd8ec44a8a7ba9a73e93facb1\"}\r\n--changeset_0ac4036e-9ea9-4dfc-90c3-66a95213b6b0\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPOST http://127.0.0.1:10002/devstoreaccount1/SampleHubVSHistory() HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nPrefer: return-no-content\r\nDataServiceVersion: 3.0;\r\n\r\n{\"ExecutionId\":\"a747299cd8ec44a8a7ba9a73e93facb1\",\"IsCheckpointComplete\":true,\"CheckpointCompletedTimestamp\":\"2021-02-25T07:58:15.3606810Z\",\"CheckpointCompletedTimestamp@odata.type\":\"Edm.DateTime\",\"PartitionKey\":\"a572042d48964354b246501e57ac17a2\",\"RowKey\":\"sentinel\"}\r\n--changeset_0ac4036e-9ea9-4dfc-90c3-66a95213b6b0--\r\n--batch_35c74636-e91e-4c4f-9ab1-906881bf7d9d--\r\n"
    // prettier-ignore
    "--batch_35c74636-e91e-4c4f-9ab1-906881bf7d9d\r\nContent-Type: multipart/mixed; boundary=changeset_0ac4036e-9ea9-4dfc-90c3-66a95213b6b0\r\n\r\n--changeset_0ac4036e-9ea9-4dfc-90c3-66a95213b6b0\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPUT http://127.0.0.1:10002/devstoreaccount1/SampleHubVSHistory(PartitionKey='a572042d48964354b246501e57ac17a2',RowKey='0000000000000000') HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nDataServiceVersion: 3.0;\r\n\r\n{\"EventId\":-1,\"IsPlayed\":false,\"_Timestamp\":\"2021-02-25T07:58:15.2007575Z\",\"_Timestamp@odata.type\":\"Edm.DateTime\",\"EventType\":\"OrchestratorStarted\",\"ExecutionId\":\"a747299cd8ec44a8a7ba9a73e93facb1\"}\r\n--changeset_0ac4036e-9ea9-4dfc-90c3-66a95213b6b0\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPUT http://127.0.0.1:10002/devstoreaccount1/SampleHubVSHistory(PartitionKey='a572042d48964354b246501e57ac17a2',RowKey='0000000000000001') HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nDataServiceVersion: 3.0;\r\n\r\n{\"Name\":\"E1_HelloSequence\",\"Version\":\"\",\"OrchestrationInstance\":\"{\\\"InstanceId\\\":\\\"a572042d48964354b246501e57ac17a2\\\",\\\"ExecutionId\\\":\\\"a747299cd8ec44a8a7ba9a73e93facb1\\\"}\",\"EventId\":-1,\"IsPlayed\":true,\"_Timestamp\":\"2021-02-25T07:58:15.0274133Z\",\"_Timestamp@odata.type\":\"Edm.DateTime\",\"EventType\":\"ExecutionStarted\",\"ExecutionId\":\"a747299cd8ec44a8a7ba9a73e93facb1\"}\r\n--changeset_0ac4036e-9ea9-4dfc-90c3-66a95213b6b0\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPUT http://127.0.0.1:10002/devstoreaccount1/SampleHubVSHistory(PartitionKey='a572042d48964354b246501e57ac17a2',RowKey='0000000000000002') HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nDataServiceVersion: 3.0;\r\n\r\n{\"Name\":\"E1_SayHello\",\"Version\":\"\",\"EventId\":0,\"IsPlayed\":false,\"_Timestamp\":\"2021-02-25T07:58:15.2330710Z\",\"_Timestamp@odata.type\":\"Edm.DateTime\",\"EventType\":\"TaskScheduled\",\"ExecutionId\":\"a747299cd8ec44a8a7ba9a73e93facb1\"}\r\n--changeset_0ac4036e-9ea9-4dfc-90c3-66a95213b6b0\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPUT http://127.0.0.1:10002/devstoreaccount1/SampleHubVSHistory(PartitionKey='a572042d48964354b246501e57ac17a2',RowKey='0000000000000003') HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nDataServiceVersion: 3.0;\r\n\r\n{\"EventId\":-1,\"IsPlayed\":false,\"_Timestamp\":\"2021-02-25T07:58:15.2338262Z\",\"_Timestamp@odata.type\":\"Edm.DateTime\",\"EventType\":\"OrchestratorCompleted\",\"ExecutionId\":\"a747299cd8ec44a8a7ba9a73e93facb1\"}\r\n--changeset_0ac4036e-9ea9-4dfc-90c3-66a95213b6b0\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPOST http://127.0.0.1:10002/devstoreaccount1/SampleHubVSHistory() HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nPrefer: return-no-content\r\nDataServiceVersion: 3.0;\r\n\r\n{\"ExecutionId\":\"a747299cd8ec44a8a7ba9a73e93facb1\",\"IsCheckpointComplete\":true,\"CheckpointCompletedTimestamp\":\"2021-02-25T07:58:15.3606810Z\",\"CheckpointCompletedTimestamp@odata.type\":\"Edm.DateTime\",\"PartitionKey\":\"a572042d48964354b246501e57ac17a2\",\"RowKey\":\"sentinel\"}\r\n--changeset_0ac4036e-9ea9-4dfc-90c3-66a95213b6b0--\r\n--batch_35c74636-e91e-4c4f-9ab1-906881bf7d9d--\r\n";

  // ####################
  // Mocks for from Durable Function request
  // ####################
  public static BatchDurableE1HelloFiddlerRequestString: string =
    // prettier-ignore
    "--batch_e54c543a-639f-4b5d-b80e-3172493f797d\r\nContent-Type: multipart/mixed; boundary=changeset_43b7c7d4-eaba-498d-8946-cd778baf7800\r\n\r\n--changeset_43b7c7d4-eaba-498d-8946-cd778baf7800\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPUT http://ipv4.fiddler:10002/devstoreaccount1/SampleHubVSHistory(PartitionKey='7219c1f2e2674f249bf9589d31ab3c6e',RowKey='0000000000000000') HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nDataServiceVersion: 3.0;\r\n\r\n{\"EventId\":-1,\"IsPlayed\":false,\"_Timestamp\":\"2021-03-01T21:34:02.3688955Z\",\"_Timestamp@odata.type\":\"Edm.DateTime\",\"EventType\":\"OrchestratorStarted\",\"ExecutionId\":\"17f0d39b6bd44086a6d5231caa6b06de\"}\r\n--changeset_43b7c7d4-eaba-498d-8946-cd778baf7800\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPUT http://ipv4.fiddler:10002/devstoreaccount1/SampleHubVSHistory(PartitionKey='7219c1f2e2674f249bf9589d31ab3c6e',RowKey='0000000000000001') HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nDataServiceVersion: 3.0;\r\n\r\n{\"Name\":\"E1_HelloSequence\",\"Version\":\"\",\"OrchestrationInstance\":\"{\\\"InstanceId\\\":\\\"7219c1f2e2674f249bf9589d31ab3c6e\\\",\\\"ExecutionId\\\":\\\"17f0d39b6bd44086a6d5231caa6b06de\\\"}\",\"EventId\":-1,\"IsPlayed\":true,\"_Timestamp\":\"2021-03-01T21:34:01.3090862Z\",\"_Timestamp@odata.type\":\"Edm.DateTime\",\"EventType\":\"ExecutionStarted\",\"ExecutionId\":\"17f0d39b6bd44086a6d5231caa6b06de\"}\r\n--changeset_43b7c7d4-eaba-498d-8946-cd778baf7800\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPUT http://ipv4.fiddler:10002/devstoreaccount1/SampleHubVSHistory(PartitionKey='7219c1f2e2674f249bf9589d31ab3c6e',RowKey='0000000000000002') HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nDataServiceVersion: 3.0;\r\n\r\n{\"Name\":\"E1_SayHello\",\"Version\":\"\",\"EventId\":0,\"IsPlayed\":false,\"_Timestamp\":\"2021-03-01T21:34:02.5667562Z\",\"_Timestamp@odata.type\":\"Edm.DateTime\",\"EventType\":\"TaskScheduled\",\"ExecutionId\":\"17f0d39b6bd44086a6d5231caa6b06de\"}\r\n--changeset_43b7c7d4-eaba-498d-8946-cd778baf7800\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPUT http://ipv4.fiddler:10002/devstoreaccount1/SampleHubVSHistory(PartitionKey='7219c1f2e2674f249bf9589d31ab3c6e',RowKey='0000000000000003') HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nDataServiceVersion: 3.0;\r\n\r\n{\"EventId\":-1,\"IsPlayed\":false,\"_Timestamp\":\"2021-03-01T21:34:02.5692738Z\",\"_Timestamp@odata.type\":\"Edm.DateTime\",\"EventType\":\"OrchestratorCompleted\",\"ExecutionId\":\"17f0d39b6bd44086a6d5231caa6b06de\"}\r\n--changeset_43b7c7d4-eaba-498d-8946-cd778baf7800\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nPOST http://ipv4.fiddler:10002/devstoreaccount1/SampleHubVSHistory() HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nPrefer: return-no-content\r\nDataServiceVersion: 3.0;\r\n\r\n{\"ExecutionId\":\"17f0d39b6bd44086a6d5231caa6b06de\",\"IsCheckpointComplete\":true,\"CheckpointCompletedTimestamp\":\"2021-03-01T21:34:02.9393490Z\",\"CheckpointCompletedTimestamp@odata.type\":\"Edm.DateTime\",\"PartitionKey\":\"7219c1f2e2674f249bf9589d31ab3c6e\",\"RowKey\":\"sentinel\"}\r\n--changeset_43b7c7d4-eaba-498d-8946-cd778baf7800--\r\n--batch_e54c543a-639f-4b5d-b80e-3172493f797d--\r\n";

  // ####################
  // Mocks for from Go SDK batch request
  // ####################
  public static BatchGoSDKInsertRequestString1: string =
    // prettier-ignore
    "--batch_1900ea73-92bf-401d-451c-a17207ccecd2\r\nContent-Type: multipart/mixed; boundary=changeset_16a8eca4-6929-4696-788e-f99e877606c0\r\n\r\n--changeset_16a8eca4-6929-4696-788e-f99e877606c0\r\nContent-Id: 0\r\nContent-Transfer-Encoding: binary\r\nContent-Type: application/http\r\n\r\nPOST http://127.0.0.1:10002/devstoreaccount1/testTable HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Length: 71\r\nContent-Type: application/json;odata=nometadata\r\nDataserviceversion: 3.0\r\nDate: Tue, 08 Mar 2022 22:44:11 GMT\r\nPrefer: return-no-content\r\nX-Ms-Date: Tue, 08 Mar 2022 22:44:11 GMT\r\nX-Ms-Version: 2019-02-02\r\n\r\n{\"PartitionKey\":\"uuid\",\"RowKey\":\"rkey1\",\"price\":5,\"product\":\"product1\"}\r\n--changeset_16a8eca4-6929-4696-788e-f99e877606c0\r\nContent-Id: 1\r\nContent-Transfer-Encoding: binary\r\nContent-Type: application/http\r\n\r\nPOST http://127.0.0.1:10002/devstoreaccount1/testTable HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Length: 72\r\nContent-Type: application/json;odata=nometadata\r\nDataserviceversion: 3.0\r\nDate: Tue, 08 Mar 2022 22:44:11 GMT\r\nPrefer: return-no-content\r\nX-Ms-Date: Tue, 08 Mar 2022 22:44:11 GMT\r\nX-Ms-Version: 2019-02-02\r\n\r\n{\"PartitionKey\":\"uuid\",\"RowKey\":\"rkey2\",\"price\":10,\"product\":\"product2\"}\r\n--changeset_16a8eca4-6929-4696-788e-f99e877606c0--\r\n\r\n--batch_1900ea73-92bf-401d-451c-a17207ccecd2--\r\n";

  public static BatchGoSDKInsertRequestString2: string =
    // prettier-ignore
    "--batch_5496aa30-4c31-467f-4a4d-d51307b6f323\r\nContent-Type: multipart/mixed; boundary=changeset_67ee7ecb-8e1d-42ba-5eb8-70569f8a7236\r\n\r\n--changeset_67ee7ecb-8e1d-42ba-5eb8-70569f8a7236\r\nContent-Transfer-Encoding: binary\r\nContent-Type: application/http\r\n\r\nPOST http://127.0.0.1:10002/devstoreaccount1/TestTable?%24format=application%2Fjson%3Bodata%3Dminimalmetadata HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Length: 93\r\nContent-Type: application/json\r\nDataserviceversion: 3.0\r\nPrefer: return-no-content\r\nX-Ms-Version: 2019-02-02\r\n\r\n{\"PartitionKey\":\"5cad691a-3fb3-4016-8061-9a18fd8dea4a\",\"RowKey\":\"rkey1\",\"product\":\"product1\"}\r\n--changeset_67ee7ecb-8e1d-42ba-5eb8-70569f8a7236\r\nContent-Transfer-Encoding: binary\r\nContent-Type: application/http\r\n\r\nPOST http://127.0.0.1:10002/devstoreaccount1/TestTable?%24format=application%2Fjson%3Bodata%3Dminimalmetadata HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Length: 93\r\nContent-Type: application/json\r\nDataserviceversion: 3.0\r\nPrefer: return-no-content\r\nX-Ms-Version: 2019-02-02\r\n\r\n{\"PartitionKey\":\"5cad691a-3fb3-4016-8061-9a18fd8dea4a\",\"RowKey\":\"rkey2\",\"product\":\"product2\"}\r\n--changeset_67ee7ecb-8e1d-42ba-5eb8-70569f8a7236--\r\n\r\n--batch_5496aa30-4c31-467f-4a4d-d51307b6f323--\r\n";

  public static BatchFuncToolsDeleteString: string =
    // prettier-ignore
    "--batch_e6bedae0-33a0-4875-bf7a-dc3963071819\nContent-Type: multipart/mixed; boundary=changeset_f3679e9d-3491-4ba7-95f3-59a8e24cd7bf\n\n--changeset_f3679e9d-3491-4ba7-95f3-59a8e24cd7bf\nContent-Type: application/http\nContent-Transfer-Encoding: binary\n\nDELETE http://127.0.0.1:10002/devstoreaccount1/TestHubNameHistory(PartitionKey='00000000EDGC5674',RowKey='0000000000000000') HTTP/1.1\nAccept: application/json;odata=minimalmetadata\nContent-Type: application/json\nDataServiceVersion: 3.0;\nIf-Match: W/\"datetime'2023-03-17T15%3A06%3A18.3075721Z'\"\n\n--changeset_f3679e9d-3491-4ba7-95f3-59a8e24cd7bf\nContent-Type: application/http\nContent-Transfer-Encoding: binary\n\nDELETE http://127.0.0.1:10002/devstoreaccount1/TestHubNameHistory(PartitionKey='00000000EDGC5674',RowKey='0000000000000001') HTTP/1.1\nAccept: application/json;odata=minimalmetadata\nContent-Type: application/json\nDataServiceVersion: 3.0;\nIf-Match: W/\"datetime'2023-03-17T15%3A06%3A18.3075732Z'\"\n\n--changeset_f3679e9d-3491-4ba7-95f3-59a8e24cd7bf\nContent-Type: application/http\nContent-Transfer-Encoding: binary\n\nDELETE http://127.0.0.1:10002/devstoreaccount1/TestHubNameHistory(PartitionKey='00000000EDGC5674',RowKey='0000000000000002') HTTP/1.1\nAccept: application/json;odata=minimalmetadata\nContent-Type: application/json\nDataServiceVersion: 3.0;\nIf-Match: W/\"datetime'2023-03-17T15%3A06%3A18.3075737Z'\"\n\n--changeset_f3679e9d-3491-4ba7-95f3-59a8e24cd7bf\nContent-Type: application/http\nContent-Transfer-Encoding: binary\n\nDELETE http://127.0.0.1:10002/devstoreaccount1/TestHubNameHistory(PartitionKey='00000000EDGC5674',RowKey='0000000000000003') HTTP/1.1\nAccept: application/json;odata=minimalmetadata\nContent-Type: application/json\nDataServiceVersion: 3.0;\nIf-Match: W/\"datetime'2023-03-17T15%3A06%3A18.3075742Z'\"\n\n--changeset_f3679e9d-3491-4ba7-95f3-59a8e24cd7bf--\n--batch_e6bedae0-33a0-4875-bf7a-dc3963071819--";

  public static BatchCloudNetDeleteString: string =
    // prettier-ignore
    "--batch_d5351566-6c65-4b24-b030-a3c1e7c459ab\r\nContent-Type: multipart/mixed; boundary=changeset_a8e76d7b-1421-4226-9e63-0fb67554be26\r\n\r\n--changeset_a8e76d7b-1421-4226-9e63-0fb67554be26\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nDELETE http://127.0.0.1:10002/devstoreaccount1/GatewayManagerInventoryTable(PartitionKey='0',RowKey='device_0_device1') HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nDataServiceVersion: 3.0;\r\nIf-Match: W/\"datetime'2022-07-19T15%3A36%3A46.297987Z'\"\r\n\r\n--changeset_a8e76d7b-1421-4226-9e63-0fb67554be26\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\n\r\nDELETE http://127.0.0.1:10002/devstoreaccount1/GatewayManagerInventoryTable(PartitionKey='0',RowKey='devicelocationmap_0_sanjose_0_device1') HTTP/1.1\r\nAccept: application/json;odata=minimalmetadata\r\nContent-Type: application/json\r\nDataServiceVersion: 3.0;\r\nIf-Match: W/\"datetime'2022-07-19T15%3A36%3A46.297103Z'\"\r\n\r\n--changeset_a8e76d7b-1421-4226-9e63-0fb67554be26--\r\n--batch_d5351566-6c65-4b24-b030-a3c1e7c459ab--\r\n";
}
