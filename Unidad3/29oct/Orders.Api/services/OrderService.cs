using Orders.Api.models;
using Orders.Api.models.dtos;
using Orders.Api.services;

namespace Orders.Api.services
{
    public class OrderService : IOrderService
    {
        static List<Order> orders = [
            new() {Id = Guid.NewGuid().ToString(), CustomerCode = "WALMART", Status = "In Transit"},
            new() {Id = Guid.NewGuid().ToString(), CustomerCode = "JUMEX", Status = "Dispatched"},
            new() {Id = Guid.NewGuid().ToString(), CustomerCode = "AMAZON", Status = "In Yard"}
        ];
        public (bool HasError, string? OrderId) CreateOrder(CreateOrderDto createOrderDto)
        {
            try
            {
                var orderId = Guid.NewGuid().ToString();
                orders.Add(new Order
                {
                    Id = orderId, 
                    CustomerCode = createOrderDto.CustomerCode,
                    Status = createOrderDto.Status,
                    HasFinished = createOrderDto.HasFinished
                });
                return(false, orderId);
            }
            catch (Exception ex)
            {
                Console.Write(ex.Message);
                return(true,null);
            }
        }

        public List<Order> GetFinishedOrders()
        {
            throw new NotImplementedException();
        }

        public int GetOrderCount()
        {
            return orders.Count;
        }
    }
}