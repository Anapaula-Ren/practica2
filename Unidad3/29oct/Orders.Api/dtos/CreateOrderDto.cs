namespace Orders.Api.models.dtos
{
    public sealed class CreateOrderDto
    {
        public required string CustomerCode { get; set; }
        public required string Status { get; set; }
        public bool HasFinished { get; set; }
    }
}
