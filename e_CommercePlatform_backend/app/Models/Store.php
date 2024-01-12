<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'personalNumber',
        'description',
        'type',
        'phone',
        'coverPhoto',
        'orderRecive',
        'orderDone',
        'orderReject',
        'openTime',
        'seller_id',
        'created_by',
    ];

   

    protected $with = ['seller'];
    public function seller(){
       return  $this->belongsTo(SellerMan::class , "seller_id" ,"id");
    }

    public function product(){
       return   $this->hasMany(Product::class);
    }
    public function order(){
        return   $this->hasMany(Order::class);
     }

    public function section(){
        return  $this->belongsToMany(Section::class ,'store__sections');
     } 


     public function create_store_admin()  
     {
        return $this->belongsTo(Admin::class);
     }   

}
