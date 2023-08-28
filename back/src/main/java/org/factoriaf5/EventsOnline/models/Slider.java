package org.factoriaf5.EventsOnline.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
@Entity
@Table(name="sliders")
public class Slider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    public Slider(){
        
    }
    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "event_id", referencedColumnName = "id")
    private OnlineEvent onlineEvent;

    public Long getId() {
        return id;
    }

    public OnlineEvent getOnlineEvent() {
        return onlineEvent;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setOnlineEvent(OnlineEvent onlineEvent) {
        this.onlineEvent = onlineEvent;
    }
    
}
