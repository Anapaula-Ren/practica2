using Orders.Api.models;
using Orders.Api.models.dtos;

namespace Orders.Api.services
{
    public class OrderService : IOrderService
    {
        static List<Order> orders = [
            new() {Id = Guid.NewGuid().ToString(), CustomerCode = "WALMART", Status = "In Transit"},
            new() {Id = Guid.NewGuid().ToString(), CustomerCode = "JUMEX", Status = "Dispatched", HasFinished=true},
            new() {Id = Guid.NewGuid().ToString(), CustomerCode = "AMAZON", Status = "In Yard", HasFinished=true}
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
            return [..orders.Where(order=>order.HasFinished==true)];
        }

        public int GetOrderCount()
        {
            return orders.Count;
        }
        
        public bool PutOrderFields(ChangeOrderDto changeOrderDto)
        {
            try
            {
                var order = orders.Find(order => order.Id == changeOrderDto.Id);
                if (order is null)
                    return false;

                order.Status = changeOrderDto.Status;
                order.HasFinished = changeOrderDto.HasFinished;
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
        }
    }
}