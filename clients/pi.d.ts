import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class PI extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: PI.Types.ClientConfiguration)
  config: Config & PI.Types.ClientConfiguration;
  /**
   * For a specific time period, retrieve the top N dimension keys for a metric.   Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned. 
   */
  describeDimensionKeys(params: PI.Types.DescribeDimensionKeysRequest, callback?: (err: AWSError, data: PI.Types.DescribeDimensionKeysResponse) => void): Request<PI.Types.DescribeDimensionKeysResponse, AWSError>;
  /**
   * For a specific time period, retrieve the top N dimension keys for a metric.   Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned. 
   */
  describeDimensionKeys(callback?: (err: AWSError, data: PI.Types.DescribeDimensionKeysResponse) => void): Request<PI.Types.DescribeDimensionKeysResponse, AWSError>;
  /**
   * Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, GetDimensionKeyDetails retrieves the full text of the dimension db.sql.statementcassociated with this ID. This operation is useful because GetResourceMetrics and DescribeDimensionKeys don't support retrieval of large SQL statement text.
   */
  getDimensionKeyDetails(params: PI.Types.GetDimensionKeyDetailsRequest, callback?: (err: AWSError, data: PI.Types.GetDimensionKeyDetailsResponse) => void): Request<PI.Types.GetDimensionKeyDetailsResponse, AWSError>;
  /**
   * Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, GetDimensionKeyDetails retrieves the full text of the dimension db.sql.statementcassociated with this ID. This operation is useful because GetResourceMetrics and DescribeDimensionKeys don't support retrieval of large SQL statement text.
   */
  getDimensionKeyDetails(callback?: (err: AWSError, data: PI.Types.GetDimensionKeyDetailsResponse) => void): Request<PI.Types.GetDimensionKeyDetailsResponse, AWSError>;
  /**
   * Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. 
   */
  getResourceMetadata(params: PI.Types.GetResourceMetadataRequest, callback?: (err: AWSError, data: PI.Types.GetResourceMetadataResponse) => void): Request<PI.Types.GetResourceMetadataResponse, AWSError>;
  /**
   * Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. 
   */
  getResourceMetadata(callback?: (err: AWSError, data: PI.Types.GetResourceMetadataResponse) => void): Request<PI.Types.GetResourceMetadataResponse, AWSError>;
  /**
   * Retrieve Performance Insights metrics for a set of data sources, over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.  Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned. 
   */
  getResourceMetrics(params: PI.Types.GetResourceMetricsRequest, callback?: (err: AWSError, data: PI.Types.GetResourceMetricsResponse) => void): Request<PI.Types.GetResourceMetricsResponse, AWSError>;
  /**
   * Retrieve Performance Insights metrics for a set of data sources, over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.  Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned. 
   */
  getResourceMetrics(callback?: (err: AWSError, data: PI.Types.GetResourceMetricsResponse) => void): Request<PI.Types.GetResourceMetricsResponse, AWSError>;
  /**
   * Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.
   */
  listAvailableResourceDimensions(params: PI.Types.ListAvailableResourceDimensionsRequest, callback?: (err: AWSError, data: PI.Types.ListAvailableResourceDimensionsResponse) => void): Request<PI.Types.ListAvailableResourceDimensionsResponse, AWSError>;
  /**
   * Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.
   */
  listAvailableResourceDimensions(callback?: (err: AWSError, data: PI.Types.ListAvailableResourceDimensionsResponse) => void): Request<PI.Types.ListAvailableResourceDimensionsResponse, AWSError>;
  /**
   * Retrieve metrics of the specified types that can be queried for a specified DB instance. 
   */
  listAvailableResourceMetrics(params: PI.Types.ListAvailableResourceMetricsRequest, callback?: (err: AWSError, data: PI.Types.ListAvailableResourceMetricsResponse) => void): Request<PI.Types.ListAvailableResourceMetricsResponse, AWSError>;
  /**
   * Retrieve metrics of the specified types that can be queried for a specified DB instance. 
   */
  listAvailableResourceMetrics(callback?: (err: AWSError, data: PI.Types.ListAvailableResourceMetricsResponse) => void): Request<PI.Types.ListAvailableResourceMetricsResponse, AWSError>;
}
declare namespace PI {
  export type AdditionalMetricsList = RequestString[];
  export type AdditionalMetricsMap = {[key: string]: Double};
  export interface DataPoint {
    /**
     * The time, in epoch format, associated with a particular Value.
     */
    Timestamp: ISOTimestamp;
    /**
     * The actual value associated with a particular Timestamp.
     */
    Value: Double;
  }
  export type DataPointsList = DataPoint[];
  export interface DescribeDimensionKeysRequest {
    /**
     * The Amazon Web Services service for which Performance Insights will return metrics. The only valid value for ServiceType is RDS. 
     */
    ServiceType: ServiceType;
    /**
     * An immutable, Amazon Web Services Region-unique identifier for a data source. Performance Insights gathers metrics from this data source. To use an Amazon RDS instance as a data source, you specify its DbiResourceId value. For example, specify db-FAIHNTYBKTGAUSUZQYPDS2GW4A. 
     */
    Identifier: RequestString;
    /**
     * The date and time specifying the beginning of the requested time series data. You must specify a StartTime within the past 7 days. The value specified is inclusive, which means that data points equal to or greater than StartTime are returned.  The value for StartTime must be earlier than the value for EndTime. 
     */
    StartTime: ISOTimestamp;
    /**
     * The date and time specifying the end of the requested time series data. The value specified is exclusive, which means that data points less than (but not equal to) EndTime are returned. The value for EndTime must be later than the value for StartTime.
     */
    EndTime: ISOTimestamp;
    /**
     * The name of a Performance Insights metric to be measured. Valid values for Metric are:    db.load.avg - a scaled representation of the number of active sessions for the database engine.     db.sampledload.avg - the raw number of active sessions for the database engine.    If the number of active sessions is less than an internal Performance Insights threshold, db.load.avg and db.sampledload.avg are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with db.load.avg showing the scaled values, db.sampledload.avg showing the raw values, and db.sampledload.avg less than db.load.avg. For most use cases, you can query db.load.avg only. 
     */
    Metric: RequestString;
    /**
     * The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as one second, or as long as one day (86400 seconds). Valid values are:     1 (one second)    60 (one minute)    300 (five minutes)    3600 (one hour)    86400 (twenty-four hours)   If you don't specify PeriodInSeconds, then Performance Insights chooses a value for you, with a goal of returning roughly 100-200 data points in the response. 
     */
    PeriodInSeconds?: Integer;
    /**
     * A specification for how to aggregate the data points from a query result. You must specify a valid dimension group. Performance Insights returns all dimensions within this group, unless you provide the names of specific dimensions within this group. You can also request that Performance Insights return a limited number of values for a dimension. 
     */
    GroupBy: DimensionGroup;
    /**
     * Additional metrics for the top N dimension keys. If the specified dimension group in the GroupBy parameter is db.sql_tokenized, you can specify per-SQL metrics to get the values for the top N SQL digests. The response syntax is "AdditionalMetrics" : { "string" : "string" }.  
     */
    AdditionalMetrics?: AdditionalMetricsList;
    /**
     * For each dimension specified in GroupBy, specify a secondary dimension to further subdivide the partition keys in the response. 
     */
    PartitionBy?: DimensionGroup;
    /**
     * One or more filters to apply in the request. Restrictions:   Any number of filters by the same dimension, as specified in the GroupBy or Partition parameters.   A single filter for any other dimension in this dimension group.  
     */
    Filter?: MetricQueryFilterMap;
    /**
     * The maximum number of items to return in the response. If more items exist than the specified MaxRecords value, a pagination token is included in the response so that the remaining results can be retrieved. 
     */
    MaxResults?: MaxResults;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeDimensionKeysResponse {
    /**
     * The start time for the returned dimension keys, after alignment to a granular boundary (as specified by PeriodInSeconds). AlignedStartTime will be less than or equal to the value of the user-specified StartTime. 
     */
    AlignedStartTime?: ISOTimestamp;
    /**
     * The end time for the returned dimension keys, after alignment to a granular boundary (as specified by PeriodInSeconds). AlignedEndTime will be greater than or equal to the value of the user-specified Endtime. 
     */
    AlignedEndTime?: ISOTimestamp;
    /**
     * If PartitionBy was present in the request, PartitionKeys contains the breakdown of dimension keys by the specified partitions. 
     */
    PartitionKeys?: ResponsePartitionKeyList;
    /**
     * The dimension keys that were requested.
     */
    Keys?: DimensionKeyDescriptionList;
    /**
     * A pagination token that indicates the response didn’t return all available records because MaxRecords was specified in the previous request. To get the remaining records, specify NextToken in a separate request with this value. 
     */
    NextToken?: NextToken;
  }
  export type Description = string;
  export type DetailStatus = "AVAILABLE"|"PROCESSING"|"UNAVAILABLE"|string;
  export interface DimensionDetail {
    /**
     * The identifier of a dimension.
     */
    Identifier?: String;
  }
  export type DimensionDetailList = DimensionDetail[];
  export interface DimensionGroup {
    /**
     * The name of the dimension group. Valid values are:    db - The name of the database to which the client is connected (only Aurora PostgreSQL, Amazon RDS PostgreSQL, Aurora MySQL, Amazon RDS MySQL, and MariaDB)    db.application - The name of the application that is connected to the database (only Aurora PostgreSQL and RDS PostgreSQL)    db.host - The host name of the connected client (all engines)    db.session_type - The type of the current session (only Aurora PostgreSQL and RDS PostgreSQL)    db.sql - The SQL that is currently executing (all engines)    db.sql_tokenized - The SQL digest (all engines)    db.wait_event - The event for which the database backend is waiting (all engines)    db.wait_event_type - The type of event for which the database backend is waiting (all engines)    db.user - The user logged in to the database (all engines)  
     */
    Group: RequestString;
    /**
     * A list of specific dimensions from a dimension group. If this parameter is not present, then it signifies that all of the dimensions in the group were requested, or are present in the response. Valid values for elements in the Dimensions array are:    db.application.name - The name of the application that is connected to the database (only Aurora PostgreSQL and RDS PostgreSQL)    db.host.id - The host ID of the connected client (all engines)    db.host.name - The host name of the connected client (all engines)    db.name - The name of the database to which the client is connected (only Aurora PostgreSQL, Amazon RDS PostgreSQL, Aurora MySQL, Amazon RDS MySQL, and MariaDB)    db.session_type.name - The type of the current session (only Aurora PostgreSQL and RDS PostgreSQL)    db.sql.id - The SQL ID generated by Performance Insights (all engines)    db.sql.db_id - The SQL ID generated by the database (all engines)    db.sql.statement - The SQL text that is being executed (all engines)    db.sql.tokenized_id     db.sql_tokenized.id - The SQL digest ID generated by Performance Insights (all engines)    db.sql_tokenized.db_id - SQL digest ID generated by the database (all engines)    db.sql_tokenized.statement - The SQL digest text (all engines)    db.user.id - The ID of the user logged in to the database (all engines)    db.user.name - The name of the user logged in to the database (all engines)    db.wait_event.name - The event for which the backend is waiting (all engines)    db.wait_event.type - The type of event for which the backend is waiting (all engines)    db.wait_event_type.name - The name of the event type for which the backend is waiting (all engines)  
     */
    Dimensions?: RequestStringList;
    /**
     * The maximum number of items to fetch for this dimension group.
     */
    Limit?: Limit;
  }
  export interface DimensionGroupDetail {
    /**
     * The name of the dimension group.
     */
    Group?: String;
    /**
     * The dimensions within a dimension group.
     */
    Dimensions?: DimensionDetailList;
  }
  export type DimensionGroupDetailList = DimensionGroupDetail[];
  export interface DimensionKeyDescription {
    /**
     * A map of name-value pairs for the dimensions in the group.
     */
    Dimensions?: DimensionMap;
    /**
     * The aggregated metric value for the dimensions, over the requested time range.
     */
    Total?: Double;
    /**
     * A map that contains the value for each additional metric.
     */
    AdditionalMetrics?: AdditionalMetricsMap;
    /**
     * If PartitionBy was specified, PartitionKeys contains the dimensions that were.
     */
    Partitions?: MetricValuesList;
  }
  export type DimensionKeyDescriptionList = DimensionKeyDescription[];
  export interface DimensionKeyDetail {
    /**
     * The value of the dimension detail data. For the db.sql.statement dimension, this value is either the full or truncated SQL query, depending on the return status.
     */
    Value?: String;
    /**
     * The full name of the dimension. The full name includes the group name and key name. The only valid value is db.sql.statement. 
     */
    Dimension?: String;
    /**
     * The status of the dimension detail data. Possible values include the following:    AVAILABLE - The dimension detail data is ready to be retrieved.    PROCESSING - The dimension detail data isn't ready to be retrieved because more processing time is required. If the requested detail data for db.sql.statement has the status PROCESSING, Performance Insights returns the truncated query.    UNAVAILABLE - The dimension detail data could not be collected successfully.  
     */
    Status?: DetailStatus;
  }
  export type DimensionKeyDetailList = DimensionKeyDetail[];
  export type DimensionMap = {[key: string]: RequestString};
  export type DimensionsMetricList = RequestString[];
  export type Double = number;
  export interface FeatureMetadata {
    /**
     * The status of the feature on the DB instance. Possible values include the following:     ENABLED: the feature is enabled on the instance.    DISABLED: the feature is disabled on the instance.    UNSUPPORTED: the feature isn't supported on the instance.    ENABLED_PENDING_REBOOT: the feature is enabled on the instance but requires a reboot to take effect.    DISABLED_PENDING_REBOOT: the feature is disabled on the instance but requires a reboot to take effect.    UNKNOWN: the feature status couldn't be determined.  
     */
    Status?: FeatureStatus;
  }
  export type FeatureMetadataMap = {[key: string]: FeatureMetadata};
  export type FeatureStatus = "ENABLED"|"DISABLED"|"UNSUPPORTED"|"ENABLED_PENDING_REBOOT"|"DISABLED_PENDING_REBOOT"|"UNKNOWN"|string;
  export interface GetDimensionKeyDetailsRequest {
    /**
     * The Amazon Web Services service for which Performance Insights returns data. The only valid value is RDS.
     */
    ServiceType: ServiceType;
    /**
     * The ID for a data source from which to gather dimension data. This ID must be immutable and unique within an Amazon Web Services Region. When a DB instance is the data source, specify its DbiResourceId value. For example, specify db-ABCDEFGHIJKLMNOPQRSTU1VW2X. 
     */
    Identifier: IdentifierString;
    /**
     * The name of the dimension group. The only valid value is db.sql. Performance Insights searches the specified group for the dimension group ID.
     */
    Group: RequestString;
    /**
     * The ID of the dimension group from which to retrieve dimension details. For dimension group db.sql, the group ID is db.sql.id.
     */
    GroupIdentifier: RequestString;
    /**
     * A list of dimensions to retrieve the detail data for within the given dimension group. For the dimension group db.sql, specify either the full dimension name db.sql.statement or the short dimension name statement. If you don't specify this parameter, Performance Insights returns all dimension data within the specified dimension group. 
     */
    RequestedDimensions?: RequestedDimensionList;
  }
  export interface GetDimensionKeyDetailsResponse {
    /**
     * The details for the requested dimensions.
     */
    Dimensions?: DimensionKeyDetailList;
  }
  export interface GetResourceMetadataRequest {
    /**
     * The Amazon Web Services service for which Performance Insights returns metrics.
     */
    ServiceType: ServiceType;
    /**
     * An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use a DB instance as a data source, specify its DbiResourceId value. For example, specify db-ABCDEFGHIJKLMNOPQRSTU1VW2X. 
     */
    Identifier: RequestString;
  }
  export interface GetResourceMetadataResponse {
    /**
     * An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use a DB instance as a data source, specify its DbiResourceId value. For example, specify db-ABCDEFGHIJKLMNOPQRSTU1VW2X. 
     */
    Identifier?: String;
    /**
     * The metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance.
     */
    Features?: FeatureMetadataMap;
  }
  export interface GetResourceMetricsRequest {
    /**
     * The Amazon Web Services service for which Performance Insights returns metrics. The only valid value for ServiceType is RDS.
     */
    ServiceType: ServiceType;
    /**
     * An immutable, Amazon Web Services Region-unique identifier for a data source. Performance Insights gathers metrics from this data source. To use a DB instance as a data source, specify its DbiResourceId value. For example, specify db-FAIHNTYBKTGAUSUZQYPDS2GW4A.
     */
    Identifier: RequestString;
    /**
     * An array of one or more queries to perform. Each query must specify a Performance Insights metric, and can optionally specify aggregation and filtering criteria.
     */
    MetricQueries: MetricQueryList;
    /**
     * The date and time specifying the beginning of the requested time series data. You can't specify a StartTime that's earlier than 7 days ago. The value specified is inclusive - data points equal to or greater than StartTime will be returned. The value for StartTime must be earlier than the value for EndTime.
     */
    StartTime: ISOTimestamp;
    /**
     * The date and time specifying the end of the requested time series data. The value specified is exclusive - data points less than (but not equal to) EndTime will be returned. The value for EndTime must be later than the value for StartTime.
     */
    EndTime: ISOTimestamp;
    /**
     * The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as one second, or as long as one day (86400 seconds). Valid values are:    1 (one second)    60 (one minute)    300 (five minutes)    3600 (one hour)    86400 (twenty-four hours)   If you don't specify PeriodInSeconds, then Performance Insights will choose a value for you, with a goal of returning roughly 100-200 data points in the response.
     */
    PeriodInSeconds?: Integer;
    /**
     * The maximum number of items to return in the response. If more items exist than the specified MaxRecords value, a pagination token is included in the response so that the remaining results can be retrieved. 
     */
    MaxResults?: MaxResults;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords.
     */
    NextToken?: NextToken;
  }
  export interface GetResourceMetricsResponse {
    /**
     * The start time for the returned metrics, after alignment to a granular boundary (as specified by PeriodInSeconds). AlignedStartTime will be less than or equal to the value of the user-specified StartTime.
     */
    AlignedStartTime?: ISOTimestamp;
    /**
     * The end time for the returned metrics, after alignment to a granular boundary (as specified by PeriodInSeconds). AlignedEndTime will be greater than or equal to the value of the user-specified Endtime.
     */
    AlignedEndTime?: ISOTimestamp;
    /**
     * An immutable, Amazon Web Services Region-unique identifier for a data source. Performance Insights gathers metrics from this data source.  To use a DB instance as a data source, you specify its DbiResourceId value - for example: db-FAIHNTYBKTGAUSUZQYPDS2GW4A 
     */
    Identifier?: String;
    /**
     * An array of metric results,, where each array element contains all of the data points for a particular dimension.
     */
    MetricList?: MetricKeyDataPointsList;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords. 
     */
    NextToken?: NextToken;
  }
  export type ISOTimestamp = Date;
  export type IdentifierString = string;
  export type Integer = number;
  export type Limit = number;
  export interface ListAvailableResourceDimensionsRequest {
    /**
     * The Amazon Web Services service for which Performance Insights returns metrics.
     */
    ServiceType: ServiceType;
    /**
     * An immutable identifier for a data source that is unique within an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use an Amazon RDS DB instance as a data source, specify its DbiResourceId value. For example, specify db-ABCDEFGHIJKLMNOPQRSTU1VWZ. 
     */
    Identifier: RequestString;
    /**
     * The types of metrics for which to retrieve dimensions. Valid values include db.load.
     */
    Metrics: DimensionsMetricList;
    /**
     * The maximum number of items to return in the response. If more items exist than the specified MaxRecords value, a pagination token is included in the response so that the remaining results can be retrieved.
     */
    MaxResults?: MaxResults;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords. 
     */
    NextToken?: NextToken;
  }
  export interface ListAvailableResourceDimensionsResponse {
    /**
     * The dimension information returned for requested metric types.
     */
    MetricDimensions?: MetricDimensionsList;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords.
     */
    NextToken?: NextToken;
  }
  export interface ListAvailableResourceMetricsRequest {
    /**
     * The Amazon Web Services service for which Performance Insights returns metrics.
     */
    ServiceType: ServiceType;
    /**
     * An immutable identifier for a data source that is unique within an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use an Amazon RDS DB instance as a data source, specify its DbiResourceId value. For example, specify db-ABCDEFGHIJKLMNOPQRSTU1VWZ. 
     */
    Identifier: RequestString;
    /**
     * The types of metrics to return in the response. Valid values in the array include the following:    os (OS counter metrics)    db (DB load metrics)    db.sql.stats (per-SQL metrics)    db.sql_tokenized.stats (per-SQL digest metrics)  
     */
    MetricTypes: MetricTypeList;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return. If the MaxRecords value is less than the number of existing items, the response includes a pagination token. 
     */
    MaxResults?: MaxResults;
  }
  export interface ListAvailableResourceMetricsResponse {
    /**
     * An array of metrics available to query. Each array element contains the full name, description, and unit of the metric. 
     */
    Metrics?: ResponseResourceMetricList;
    /**
     * A pagination token that indicates the response didn’t return all available records because MaxRecords was specified in the previous request. To get the remaining records, specify NextToken in a separate request with this value. 
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export interface MetricDimensionGroups {
    /**
     * The metric type to which the dimension information belongs.
     */
    Metric?: String;
    /**
     * The available dimension groups for a metric type.
     */
    Groups?: DimensionGroupDetailList;
  }
  export type MetricDimensionsList = MetricDimensionGroups[];
  export interface MetricKeyDataPoints {
    /**
     * The dimensions to which the data points apply.
     */
    Key?: ResponseResourceMetricKey;
    /**
     * An array of timestamp-value pairs, representing measurements over a period of time.
     */
    DataPoints?: DataPointsList;
  }
  export type MetricKeyDataPointsList = MetricKeyDataPoints[];
  export interface MetricQuery {
    /**
     * The name of a Performance Insights metric to be measured. Valid values for Metric are:    db.load.avg - a scaled representation of the number of active sessions for the database engine.    db.sampledload.avg - the raw number of active sessions for the database engine.   If the number of active sessions is less than an internal Performance Insights threshold, db.load.avg and db.sampledload.avg are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with db.load.avg showing the scaled values, db.sampledload.avg showing the raw values, and db.sampledload.avg less than db.load.avg. For most use cases, you can query db.load.avg only. 
     */
    Metric: RequestString;
    /**
     * A specification for how to aggregate the data points from a query result. You must specify a valid dimension group. Performance Insights will return all of the dimensions within that group, unless you provide the names of specific dimensions within that group. You can also request that Performance Insights return a limited number of values for a dimension.
     */
    GroupBy?: DimensionGroup;
    /**
     * One or more filters to apply in the request. Restrictions:   Any number of filters by the same dimension, as specified in the GroupBy parameter.   A single filter for any other dimension in this dimension group.  
     */
    Filter?: MetricQueryFilterMap;
  }
  export type MetricQueryFilterMap = {[key: string]: RequestString};
  export type MetricQueryList = MetricQuery[];
  export type MetricTypeList = RequestString[];
  export type MetricValuesList = Double[];
  export type NextToken = string;
  export type RequestString = string;
  export type RequestStringList = RequestString[];
  export type RequestedDimensionList = RequestString[];
  export interface ResponsePartitionKey {
    /**
     * A dimension map that contains the dimensions for this partition.
     */
    Dimensions: DimensionMap;
  }
  export type ResponsePartitionKeyList = ResponsePartitionKey[];
  export interface ResponseResourceMetric {
    /**
     * The full name of the metric.
     */
    Metric?: String;
    /**
     * The description of the metric.
     */
    Description?: Description;
    /**
     * The unit of the metric.
     */
    Unit?: String;
  }
  export interface ResponseResourceMetricKey {
    /**
     * The name of a Performance Insights metric to be measured. Valid values for Metric are:    db.load.avg - a scaled representation of the number of active sessions for the database engine.    db.sampledload.avg - the raw number of active sessions for the database engine.   If the number of active sessions is less than an internal Performance Insights threshold, db.load.avg and db.sampledload.avg are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with db.load.avg showing the scaled values, db.sampledload.avg showing the raw values, and db.sampledload.avg less than db.load.avg. For most use cases, you can query db.load.avg only. 
     */
    Metric: String;
    /**
     * The valid dimensions for the metric.
     */
    Dimensions?: DimensionMap;
  }
  export type ResponseResourceMetricList = ResponseResourceMetric[];
  export type ServiceType = "RDS"|"DOCDB"|string;
  export type String = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-02-27"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the PI client.
   */
  export import Types = PI;
}
export = PI;
