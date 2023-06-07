#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Services/Order/SalesMS.Services.Order.OrderApi/SalesMS.Services.Order.OrderApi.csproj", "Services/Order/SalesMS.Services.Order.OrderApi/"]
COPY ["Shared/SalesMS.Shared.SharedClass/SalesMS.Shared.SharedClass.csproj", "Shared/SalesMS.Shared.SharedClass/"]
COPY ["Services/Order/SalesMS.Services.Order.OrderApplication/SalesMS.Services.Order.OrderApplication.csproj", "Services/Order/SalesMS.Services.Order.OrderApplication/"]
COPY ["Services/Order/SalesMs.Services.Order.OrderDomain/SalesMs.Services.Order.OrderDomain.csproj", "Services/Order/SalesMs.Services.Order.OrderDomain/"]
COPY ["Services/Order/SalesMS.Services.Order.OrderCore/SalesMS.Services.Order.OrderCore.csproj", "Services/Order/SalesMS.Services.Order.OrderCore/"]
COPY ["Services/Order/SalesMS.Services.Order.OrderInfrastructure/SalesMS.Services.Order.OrderInfrastructure.csproj", "Services/Order/SalesMS.Services.Order.OrderInfrastructure/"]
RUN dotnet restore "Services/Order/SalesMS.Services.Order.OrderApi/SalesMS.Services.Order.OrderApi.csproj"
COPY . .
WORKDIR "/src/Services/Order/SalesMS.Services.Order.OrderApi"
RUN dotnet build "SalesMS.Services.Order.OrderApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SalesMS.Services.Order.OrderApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SalesMS.Services.Order.OrderApi.dll"]