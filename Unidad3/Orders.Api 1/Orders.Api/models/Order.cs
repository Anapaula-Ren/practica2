namespace Orders.Api.models
{
    public sealed class Order
    {
        public required string Id { get; set; }
        public required string CustomerCode { get; set; }
        public required string  Status { get; set; }
        public bool HasFinished { get; set; } = false;
    }
}
