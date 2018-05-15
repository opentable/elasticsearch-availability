// FIXME remove unused constants
const guestCenterConstants = {
  maxPartySize: 20,
  minPartySize: 1,
  numberOfCachedDays: 100,
  slotIntervalInMinutes: 15,
  slotsPerByte: 2,
  totalSlots: 96
};

const availabilityStoreConstants = {
  bitmapHeaderOffsetInBytes: 4
};

const availDataLength = (guestCenterConstants.totalSlots / guestCenterConstants.slotsPerByte)
  + availabilityStoreConstants.bitmapHeaderOffsetInBytes;

module.exports = function parseAvailabilityByteArray(dateTime, byteString) {
  return {};
}

//public static bool IsSlotAvailableForDay(DateTime slotDateTime, byte[] dayAvailability)
//{
//	//If dayavailability is invalid return false
//	const int availDataLength = (GuestCenterConstants.TotalSlots / GuestCenterConstants.SlotsPerByte) + AvailabilityStoreConstants.BitmapHeaderOffsetInBytes;
//	if (dayAvailability == null || dayAvailability.Length < availDataLength)
//		return false;

//	int slotIndex;
//	var availArrayIndex = GetAvailabilityArrayIndexForSlot(slotDateTime, out slotIndex);

//	var dataByte = dayAvailability[availArrayIndex];

//	//each dataByte contains two slots return the correct slot; they are arranged left to right so left is for even slotindex and right for odd slotindex
//	//zero out the bits for other slot.
//	var slotByte = slotIndex % 2 == 0 ? dataByte & 0xF0 : dataByte & 0x0F;

//	return slotByte != 0;
//}
//
//public class GuestCenterConstants
//{
//        //Constants
//        public const int NumberOfCachedDays = 100;
//        public const int SlotsPerByte = 2;
//        public const int TotalSlots = 96;
//        public const int SlotIntervalInMinutes = 15;
//        public const int MinPartySize = 1;
//        public const int MaxPartySize = 20;
//}
//
//private static int GetAvailabilityArrayIndexForSlot(DateTime slotDateTime, out int slotIndex)
//{
//        //Subtract midnight hours from the time and divde by the slot intevral to get the index
//        slotIndex = (int)(slotDateTime - slotDateTime.Date).TotalMinutes / CacheServerConstants.csSlotIntervalInMinutes;
//        return AvailabilityStoreConstants.BitmapHeaderOffsetInBytes + (slotIndex / GuestCenterConstants.SlotsPerByte);
//}
//
// public class AvailabilityStoreConstants
// {
//         public const int BitmapHeaderOffsetInBytes = 4;////Offset to skip header written to each Value
//         public const string BufferRidField = "Rid";
//         public const string BufferMessageField = "Message";
//         public const string BufferExpiryField = "Expiry";
//         public const string BufferIpAddressField = "CacheServerIP";
//         public const string BufferPortField = "CacheServerPort";
//         public const string BufferGuestCenterUriField = "GuestCenterUri";
//         public const string BufferAvailabilityStoreMessageTypeField = "AvailabilityStoreMessageType";
//         public const string BufferKeyPrefix = "Buffer";
//         public const string SeqNumberKeyPrefix = "SeqNumber";
//         public const string InitializerKeyPrefix = "Initializer";
//         public const string InitializerRidField = "Rid";
//         public const string InitializerMessageField = "Message";
//         public const string InitializerExpiryField = "Expiry";
//         public const string InitializerIpAddressField = "CacheServerIP";
//         public const string InitializerPortField = "CacheServerPort";
//         public const string InitRecordKey = "FullInitializationRecord";
//         public const string InitRecordPrevRunDateTimeField = "PreviousRunDT";
//         public const string InitRecordPrevRunRidCountField = "PreviousRunRidCount";
//         public const string InitRecordLatestRunDateTimeField = "LatestRunDT";
//         public const string InitRecordLatestRunRidCountField = "LatestRunRidCount";
//         public const string SQLServerConnectionStringsEncryptedKey = "SQLServerConnectionStringsEncrypted";
//         public const string SQLServerWebDBDefaultConnectionStringKey = "SQLServer_WebDB_ConnString";
//         public const string SQLServerWebDBSlaveDefaultConnectionStringKey = "SQLServer_WebDB_Slave_ConnString";
//         public const string SQLServerWebDBNAConnectionStringKey = "SQLServer_WebDB_NA_ConnString";
//         public const string SQLServerWebDBEUConnectionStringKey = "SQLServer_WebDB_EU_ConnString";
//         public const string SQLServerWebDBAPConnectionStringKey = "SQLServer_WebDB_AP_ConnString";
//         public const string SQLServerWebDBSlaveNAConnectionStringKey = "SQLServer_WebDB_Slave_NA_ConnString";
//         public const string SQLServerWebDBSlaveEUConnectionStringKey = "SQLServer_WebDB_Slave_EU_ConnString";
//         public const string SQLServerWebDBSlaveAPConnectionStringKey = "SQLServer_WebDB_Slave_AP_ConnString";
//         public const string SQLServerWebLogDBDefaultConnectionStringKey = "SQLServer_WebLogDB_ConnString";
//         public const string DefaultCacheServerIpAddress = "0.0.0.0";
//         public const int CacheServerPort = 2369;
//         public const string InventoryTypeDefault = "DEFAULT";
//         public const int InventoryTypeIdDefault = 0;
//         public const int ParentInventoryTypeIdDefault = 1;
//         public const string WaitlistV2OnlyConfigKey = "BlockWaitlistV2OnlyRidsEnabled";
//         public const string ReadFromWebDBSlaveConfigKey = "ReadFromWebDBSlave";
//         public const string ShardToRegionMappingConfigKey = "ShardToRegionMapping";
//         public const string HomeRegionConfigKey = "HomeRegion";

//         public const int Shard0 = 0;
//         public const int Shard1 = 1;
//         public const int Shard2 = 2;
//         public const int Shard3 = 3;

//         public static readonly IDictionary<ExternalRestaurantType, AvailabilityStoreMessageType> ExtRestTypeToAvStoreMsgTypeMapping =
//                 new Dictionary<ExternalRestaurantType, AvailabilityStoreMessageType>
//                         {
//                                 { ExternalRestaurantType.Erb, AvailabilityStoreMessageType.ErbType1Messages },
//                                 { ExternalRestaurantType.GuestBridge, AvailabilityStoreMessageType.ErbType1Messages },
//                                 { ExternalRestaurantType.GuestCenter, AvailabilityStoreMessageType.GuestCenterType1Messages },
//                                 { ExternalRestaurantType.OTConnectPlus, AvailabilityStoreMessageType.GuestCenterType1Messages },
//                                 { ExternalRestaurantType.Rap, AvailabilityStoreMessageType.GuestCenterType2Messages },
//                                 { ExternalRestaurantType.Unknown, AvailabilityStoreMessageType.GenericInventoryTypeMessage }
//                         };

//         public static readonly IDictionary<RestaurantType, AvailabilityStoreMessageType> RestTypeToAvStoreMsgTypeMapping =
//                 new Dictionary<RestaurantType, AvailabilityStoreMessageType>
//                         {
//                                 { RestaurantType.Erb, AvailabilityStoreMessageType.ErbType1Messages },
//                                 { RestaurantType.GuestCenter, AvailabilityStoreMessageType.GuestCenterType1Messages },
//                                 { RestaurantType.Rap, AvailabilityStoreMessageType.GuestCenterType2Messages },
//                                 { RestaurantType.Unknown, AvailabilityStoreMessageType.GenericInventoryTypeMessage }
//                         };
// }
//
//
	//public class CacheServerConstants
	//{
	//	//Constants
	//	public const int csSeqNumberIncrementBy = 1;
	//	public const int csNumCachedDays = 60; //It's 0 indexed but CS sends 61 days in Refresh Messages
	//	public const int csMinPartySize = 2;
	//	public const int csMaxPartySize = 10;
	//	public const int csMinSlot = 1;
	//	public const int csMaxSlot = 96;
	//	public const int csSlotsPerByte = 2;
	//	public const int csAddDayMessageDataArrayOffset = 34;
	//	public const int csRefreshMessageDataArrayOffset = 28;
	//	public const int csUpdateMessageDataArrayOffset = 37;
	//	public const int csIndexOfMessageSizeInHeader = 6; //0 based index

	//	public const int csBitsPerSlot = 4;
	//	public const int csSlotIntervalInMinutes = 15;

	//	public const uint MSG_HEADER_MARKER = 0xFEED4F54;
	//	public const int MSG_HEADER_BYTE_LENGTH = 11;
	//	public const short MSG_HEADER_VERSION = 1;//Using short to include both version and reserved+Heartbeat

	//	public const int WEBPINGIPMSG_BYTE_LENGTH = 27;
	//	public const int CACHEREQUESTMSG_BYTE_LENGTH = 9;

	//	public const byte BYTES_PER_SLOT = 0X01;
	//	public const byte SLOTS_PER_BYTE = 0X02;
	//	public const byte DAYS_IN_CACHE = 0x3B; /*Verified by inspecting a Cache Server generated CacheRequest message*/
	//	public const byte MIN_PARTY_SIZE = 0X02;
	//	public const byte MAX_PARTY_SIZE = 0X0A;
	//}

	//public enum CacheServerMessageType : byte
	//{
	//	Reserved = 0,
	//	Error = 0x01,
	//	WebPing = 0x40,
	//	AvailabilityRequestV1 = 0x41,
	//	AvailabilityResponseV1 = 0x42,
	//	BatchPing = 0x43,
	//	ReachabilityRequest = 0x44,
	//	ReachabilityReply = 0x45,
	//	InvalidateCache = 0x46,
	//	WebPingIP = 0x47,
	//	UpdateErbDataV1 = 0x48,
	//	AvailabilityRequest = 0x49,
	//	AvailabilityResponse = 0x4A,
	//	UpdateErbData = 0x4B,
	//	InvalidateCacheNew = 0x4C,
	//	ErbPing = 0x80,
	//	TimeUpdate = 0x82,
	//	CacheInit = 0x83,
	//	CacheRequest = 0x84,
	//	CacheRefresh = 0x85,
	//	CacheUpdate = 0x86,
	//	CacheAddDay = 0x87,
	//	AuthRequest = 0x88,
	//	AuthReply = 0x89,
	//	DebugDumpRequest = 0xFF,
	//	DebugDumpReply = 0xFE
	//}

	//public enum InvalidateCacheReason : uint
	//{
	//	Unknown = 0,
	//	SearchValidationFailure = 1,
	//	FailoverPing = 2,
	//	ManualNoAudit = 3,
	//	ManualAudit = 4
	//};
