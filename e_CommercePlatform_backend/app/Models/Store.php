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
        'type',
        'phone',
        'cover_photo',
        'order_recive',
        'order_done',
        'order_reject',
        'open_time',
        'seller_id',
    ];


    public function seller(){
        $this->belongsTo(SellerMan::class);
    }

    public function product(){
        $this->hasMany(Product::class);
    }
}
