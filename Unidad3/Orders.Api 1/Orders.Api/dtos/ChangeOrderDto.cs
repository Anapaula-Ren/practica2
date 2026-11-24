namespace Orders.Api.models.dtos
{
    public sealed class ChangeOrderDto()
    {
        public required string Id { get; set; }
        public required string Status { get; set; }
        public bool HasFinished { get; set; }
    }
}
