using Orders.Api.models;
using Orders.Api.models.dtos;

namespace Orders.Api.services
{
    public interface IOrderService
    {
        (bool HasError,string? OrderId) CreateOrder(CreateOrderDto createOrderDto);
        List<Order> GetFinishedOrders();
        int GetOrderCount();
        bool PutOrderFields(ChangeOrderDto changeOrderDto);
    }
}