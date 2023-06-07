#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Services/Discount/SalesMS.Services.Discount.DiscountApi/SalesMS.Services.Discount.DiscountApi.csproj", "Services/Discount/SalesMS.Services.Discount.DiscountApi/"]
COPY ["Shared/SalesMS.Shared.SharedClass/SalesMS.Shared.SharedClass.csproj", "Shared/SalesMS.Shared.SharedClass/"]
RUN dotnet restore "Services/Discount/SalesMS.Services.Discount.DiscountApi/SalesMS.Services.Discount.DiscountApi.csproj"
COPY . .
WORKDIR "/src/Services/Discount/SalesMS.Services.Discount.DiscountApi"
RUN dotnet build "SalesMS.Services.Discount.DiscountApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SalesMS.Services.Discount.DiscountApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SalesMS.Services.Discount.DiscountApi.dll"]