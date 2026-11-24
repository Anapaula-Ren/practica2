using Microsoft.AspNetCore.Mvc;
using Orders.Api.models.dtos;
using Orders.Api.services;

[ApiController]
[Route("api/[controller]")]

public class OrderController : ControllerBase
{
    private readonly IOrderService _orderService;

    public OrderController(IOrderService orderService)
    {
        _orderService = orderService;
    }

    [HttpPost]
    public IActionResult CreateOrder(CreateOrderDto createOrderDto)
    {
        var (HasError, OrderId) = _orderService.CreateOrder(createOrderDto);
        return HasError ? StatusCode(500,new {Message = "Ocurrió un error inesperado"}) : StatusCode(201, new {OrderId});
    }

    [HttpGet("terminadas")]
    public IActionResult GetOrdenesTerminadas()
    {
        var ordenesTerminadas = _orderService.GetFinishedOrders();
        return StatusCode(200, new{ordenesTerminadas});
    }

    //api/Order/total
    [HttpGet("total")]
    public IActionResult GetTotalOrders()
    {
        var totalOrders = _orderService.GetOrderCount();
        return StatusCode(200, new{totalOrders});
    }

    [HttpPut]
    public IActionResult PutOrderFields(ChangeOrderDto changeOrderDto)
    {
        var updated = _orderService.PutOrderFields(changeOrderDto);
        return updated ? StatusCode(200,new {Message = "Se cambiaron los campos correctamente"}) : StatusCode(500, new {Message = "No existe esa orden"});
    }
}